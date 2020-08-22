import React, { Component } from "react";
import "./App.css";
import PokeCard from "../components/PokeCard";

class Quadrant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      searchfield1: "",
      searchfield2: "",
    };
  }

  render() {
    // const { pokemons } = this.state;
    const box = {
      display: "inline-grid",
      width: "50%",
      height: "700px",
      textAlign: "center",
      gridTemplateRows: "40px auto",
      ...this.props.style,
    };

    const bar = {
      display: "inline-grid",
      gridTemplateColumns: "15% 70% 15%",
    };

    const { selectedPokemon } = this.props;

    return (
      <div style={box} className="Box">
        <div style={bar} className="searchBox1">
          <button
            style={this.props.buttonStyle}
            className="searchButton"
            onClick={this.props.click}
          >
            Set {this.props.button}!
          </button>
        </div>
        {selectedPokemon && (
          <PokeCard
            id={selectedPokemon.id}
            name={selectedPokemon.name}
            height={selectedPokemon.height}
            weight={selectedPokemon.weight}
            types={selectedPokemon.types}
          />
        )}
      </div>
    );
  }
}

export default Quadrant;

/* 
1. props
2. prop types
3. class components
*/
