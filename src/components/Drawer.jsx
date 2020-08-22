import React from "react";
import "./Drawer.css";

const Drawer = (props) => {
  return (
    <div className="drawer">
      <button className="drawerClose" onClick={props.click}>
        x
      </button>
      <div className="cardSearchBar">
        <input
          className="drawerSearch"
          type="text"
          placeholder="Whatcha lookin for?"
          onChange={props.searchChange}
        />
      </div>
      {props.children}
    </div>
  );
};

export default Drawer;
