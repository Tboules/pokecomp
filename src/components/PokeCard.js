import React from "react";
import "./PokeCard.css";

const pokeCard = ({ name, height, weight, id, types, onClick }) => {
  const clickListener = () => {
    if (onClick) {
      onClick({ name, height, weight, id, types });
    }
  };

  return (
    <div className="card" onClick={clickListener}>
      <div className="thumbnailBox">
        <img
          className="thumbnails"
          alt="Pokemon"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        />
      </div>
      <div className="pokeinfo">
        <h1>{name}</h1>
        <ul>
          <li>height: {height}</li>
          <li>weight: {weight}</li>
          <li>
            types:
            <ul>
              {types &&
                types.map((type) => {
                  return <li key={type.type.name}>{type.type.name}</li>;
                })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default pokeCard;
