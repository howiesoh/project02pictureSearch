import React from "react";
import Search from "./component/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Picture from "./component/Picture";

const HomePage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currenSearch, setCurren] = useState("");
  const initialUrl = "https://api.pexels.com/v1/curated?page=1&per_page=16";
  const auth = "h99IJYkBAhaft6RAidNFUjJro1j64bAAOXtXXPL5YGhc0ddEfXWq77tk";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    });
    setData(result.data.photos);
    setCurren(input);
  };

  const morePicture = async () => {
    let newURL;
    if (currenSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=16`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currenSearch}&per_page=16&page=${
        page + 1
      }`;
    }
    setPage(page + 1);
    let result = await axios.get(newURL, {
      headers: {
        Authorization: auth,
      },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialUrl);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "  rgb(48, 48, 48)" }}>
      <Search
        search={() => {
          if (input != "") {
            search(searchURL);
          }
        }}
        setInput={setInput}
      />

      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>more picture</button>
      </div>
    </div>
  );
};

export default HomePage;
