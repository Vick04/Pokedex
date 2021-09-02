import React, { useEffect, useState, FC } from 'react';
import { Box, MainSearcher, Results, SearchPanelStyled } from './SubComponents';
import { MiniImage, Text } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../TS/Types';
import * as functions from '../../Functions';
import pokemonList from '../../__Mocks__/pokemonList.json';
import * as actionsGenerator from '../../Redux/Actions';
import { useHistory } from 'react-router-dom';

export const SearchPanel: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const searchInputValue = useSelector((state: ReduxState) => state.searchInputValue);
    const firstOpen = useSelector((state: ReduxState) => state.firstOpen);
    const [newPokemonList, setNewPokemonList] = useState([]);

    useEffect(() => {
        const slicedList = pokemonList.pokemon.slice(0, 151);
        setNewPokemonList(slicedList.filter((pok) => pok.name.indexOf(searchInputValue) != -1));
    }, [searchInputValue]);

    const handleClick = (number: number) => {
        dispatch(actionsGenerator.setLoading());
        history.push(`/Pokemon/${number}`);
    };
    return (
        <SearchPanelStyled firstOpen={firstOpen}>
            <MainSearcher firstOpen={firstOpen} />
            <Results firstOpen={firstOpen}>
                {newPokemonList.map((pok) => (
                    <Box key={pok.number} onClick={() => handleClick(pok.number)}>
                        <MiniImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pok.number}.png`} />
                        <Text color="white" fontSize="textVerySmall" fontWeight="bold">
                            {functions.capitalize(pok.name)}
                        </Text>
                    </Box>
                ))}
            </Results>
        </SearchPanelStyled>
    );
};
