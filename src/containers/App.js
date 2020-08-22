import React, { Component } from "react";
import "./App.css";
import Heading from "../components/Heading";
import PokeList from "../components/PokeList";
import Quadrant from "./Quadrant";
import Drawer from "../components/Drawer";
import { fetchPokemon } from "../api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchfield: "",
      isDrawerOpen: false,
      selectedBluePokemon: null,
      selectedRedPokemon: null,
      sectionSelected: null,
    };
  }

  componentDidMount() {
    fetchPokemon().then((pokeData) => this.setState({ pokemons: pokeData }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { pokemons, searchfield } = this.state;

    const drawerOpenClose = () => {
      if (!this.state.isDrawerOpen) {
        this.setState({
          isDrawerOpen: true,
        });
      } else {
        this.setState({
          isDrawerOpen: false,
        });
      }
    };

    const blueSectionClicked = () => {
      drawerOpenClose();
      this.setState({ sectionSelected: "blue" });
    };

    const redSectionClicked = () => {
      drawerOpenClose();
      this.setState({ sectionSelected: "red" });
    };

    const filterPokemon = pokemons.filter((pokemon) => {
      return (
        pokemon.name.toLowerCase().includes(searchfield.toLowerCase()) ||
        `${pokemon.id}`.includes(searchfield)
      );
    }); // I would also like the filter to look for the pokemon id//

    let drawer;
    if (this.state.isDrawerOpen) {
      drawer = (
        <Drawer searchChange={this.onSearchChange} click={drawerOpenClose}>
          <PokeList
            onCardClick={(value) => {
              if (this.state.sectionSelected === "blue") {
                this.setState({ selectedBluePokemon: value });
              } else if (this.state.sectionSelected === "red") {
                this.setState({ selectedRedPokemon: value });
              }
              this.setState({
                isDrawerOpen: false,
              });
            }}
            pokemons={filterPokemon}
          />
        </Drawer>
      );
    } // how is this possible? doesnt a variable need an = after it?

    return (
      <div className="page">
        <Heading />
        <Quadrant
          className="blueBox"
          button="Blue"
          style={{ backgroundColor: "#3182ce" }}
          click={blueSectionClicked}
          selectedPokemon={this.state.selectedBluePokemon}
        />
        <Quadrant
          className="redBox"
          button="Red"
          style={{ backgroundColor: "#fc8181" }}
          click={redSectionClicked}
          selectedPokemon={this.state.selectedRedPokemon}
        />
        {drawer}
      </div>
    );
  }
}

export default App;
