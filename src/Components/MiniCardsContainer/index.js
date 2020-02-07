import React from "react";
import MiniCard from "./MiniCard";
import styled from "styled-components";
import { device } from "../../Styles/Globals";
import { homeContext } from "../Home";
import PropTypes from "prop-types";

const Container = styled.div`
  background: #e0e0e0;
  display: grid;
  grid-area: body;
  grid-template-columns: repeat(5, 1fr);

  @media ${device.lowTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MiniCardsContainer = ({ data }) => {
  return (
    <homeContext.Consumer>
      {({ selectPokemon }) => (
        <Container>
          {data.pokemon.slice(0, 151).map((pokemon, i) => (
            <MiniCard
              key={pokemon.name}
              name={pokemon.name}
              number={i}
              onClick={() => selectPokemon(i + 1)}
            ></MiniCard>
          ))}
        </Container>
      )}
    </homeContext.Consumer>
  );
};

MiniCardsContainer.propTypes = {
  data: PropTypes.object
};

export default MiniCardsContainer;
