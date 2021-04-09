import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const Menuitem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menuItem`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subTitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(Menuitem);
