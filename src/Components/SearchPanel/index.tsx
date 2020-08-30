import React, { useEffect, useState, FC } from 'react';
import { MainSearcher, Results, SearchPanelStyled } from './SubComponents';
import { MiniImage, Text } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState, FullData } from '../../TS/Types';
import * as functions from '../../Functions';
import pokemonList from '../../__Mocks__/pokemonList.json';
import * as actionsGenerator from '../../Redux/Actions';

export const SearchPanel: FC = () => {
    const dispatch = useDispatch();
    const searchInputValue = useSelector((state: ReduxState) => state.searchInputValue);
    const firstOpen = useSelector((state: ReduxState) => state.firstOpen);
    const [newPokemonList, setNewPokemonList] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(0);

    useEffect(() => {
        const slicedList = pokemonList.pokemon.slice(0, 151);
        setNewPokemonList(slicedList.filter((pok) => pok.name.indexOf(searchInputValue) != -1));
    }, [searchInputValue]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const fullData: FullData = {
            basicData: '',
            evolutionChain: '',
            specieData: '',
            typeData: '',
        };
        let urltypeData = '';

        pokemonSelected &&
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}/`, {
                signal: signal,
            })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    fullData.basicData = JSON.stringify(res);
                    urltypeData = res.types[0].type.url;
                    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${res.name}`);
                })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    fullData.specieData = JSON.stringify(res);
                    return fetch(res.evolution_chain.url);
                })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    fullData.evolutionChain = JSON.stringify(res);
                    return fetch(urltypeData);
                })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    fullData.typeData = JSON.stringify(res);
                    dispatch(actionsGenerator.updateFullData(fullData));
                    dispatch(actionsGenerator.updateProfile(functions.getInfoForProfilePanel(fullData)));
                    dispatch(actionsGenerator.updateData(functions.getInfoForDataBox(fullData)));
                    dispatch(actionsGenerator.updateStats(functions.getInfoForStatsBox(fullData)));
                    dispatch(actionsGenerator.updateEvolutionChain(functions.getInfoForEvoChainBox(fullData)));
                    dispatch(actionsGenerator.setSearchInputValue(''));
                    dispatch(actionsGenerator.setSearching());
                    firstOpen && dispatch(actionsGenerator.setFirstOpen());
                    dispatch(actionsGenerator.setLoading());
                })
                .catch((error) => {
                    console.log(error);
                });

        return function cancel() {
            abortController.abort();
        };
    }, [pokemonSelected]);

    const handleClick = (number: number) => {
        setPokemonSelected(number);
        dispatch(actionsGenerator.setLoading());
    };
    return (
        <SearchPanelStyled firstOpen={firstOpen}>
            <MainSearcher firstOpen={firstOpen} />
            <Results firstOpen={firstOpen}>
                {newPokemonList.map((pok) => (
                    <div key={pok.number} onClick={() => handleClick(pok.number)}>
                        <MiniImage src={`https://pokeres.bastionbot.org/images/pokemon/${pok.number}.png`} size="80px" />
                        <Text color="white" fontSize="textVerySmall" fontWeight="bold">
                            {functions.capitalize(pok.name)}
                        </Text>
                    </div>
                ))}
            </Results>
        </SearchPanelStyled>
    );
};
