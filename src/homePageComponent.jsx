import React from "react";
import "./homePageStyle.scss"

const homePageComponent = () => {
  return (
    <div>
      <div className="homepage">
        <div className="directoryMenu">
          <div className="menuItem">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subTitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subTitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subTitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="content">
              <h1 className="title">WOMEN</h1>
              <span className="subTitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menuItem">
            <div className="content">
              <h1 className="title">MEN</h1>
              <span className="subTitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePageComponent;
