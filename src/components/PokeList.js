import React from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokemons, onCardClick }) => {
  return (
    <div>
      {pokemons.map((pokeData) => {
        return (
          <PokeCard
            key={pokeData.id}
            id={pokeData.id}
            name={pokeData.name}
            height={pokeData.height}
            weight={pokeData.weight}
            types={pokeData.types}
            onClick={onCardClick}
          />
        );
      })}
    </div>
  );
};

export default PokeList;
