import React from "react";
import "./Heading.css";

const Heading = (props) => {
  const ids = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
  return (
    <div className="heading">
      {ids.map((id) => {
        return (
          <img
            className="heading-image"
            alt="Pokemon"
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          ></img>
        );
      })}
      <h1 className="title">Pokecomp!</h1>
    </div>
  );
};

export default Heading;
