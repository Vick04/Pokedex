import React, { useState } from "react";
import MiniCardsContainer from "./../MiniCardsContainer";
import { HomeBody } from "./HomeBody";

export const homeContext = React.createContext();

const Home = () => {
  const data = require("./../../Data/PokemonList");

  const [pokemonSelected, setPokemonSelected] = useState(1);

  const value = {
    pokemonSelected,
    selectPokemon: poke => {setPokemonSelected(poke)}
  };

  return (
    <homeContext.Provider value={value}>
      <div style={{position: "fixed"}}>
      {value.pokemonSelected}

      </div>
      <HomeBody>
        <MiniCardsContainer
          data={data}
        />
      </HomeBody>
    </homeContext.Provider>
  );
};

export default Home;
