import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <input type="radio" name="slide" id="c1" />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>關於這個網站</h4>
              <p>圖片網是一個集合了各種圖片資源的網絡平台。</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>素材免費</h4>
              <p>使用面費素材資料庫，皆可直接下載。</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>多種選擇</h4>
              <p>龐大的資料庫滿足您對圖片類型的各種需要。</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>使用愉快</h4>
              <p>開始您對所需圖片的搜索吧!</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default About;
