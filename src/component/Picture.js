import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imgContainer">
        <a target="_blank" href={data.src.large}>
          <img src={data.src.large} alt="pic" />
        </a>
      </div>
    </div>
  );
};

export default Picture;
