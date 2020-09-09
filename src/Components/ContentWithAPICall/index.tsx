import React, { ReactNode, useEffect, FC } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState, FullData } from '../../TS/Types';
import { colors } from '../VariablesAndConfigs';
import pokeball from '../../Media/Images/svg/Pokeball.svg';
import * as actionsGenerator from '../../Redux/Actions';
import * as functions from '../../Functions';
import { useParams } from 'react-router-dom';

const Content = styled.article`
    display: contents;
`;

const ImgDiv = styled.div<{ type: string }>`
    ${({ type }) => `
        display: flex;
        align-items: center;
        background: ${colors[type]}66;
    `}
`;

const LoadingImg = styled.img`
    width: 200px;
    margin: 0 auto;
    animation: spin 4s linear infinite;
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const ContentWithAPICall: FC<{ children: ReactNode }> = ({ children }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state: ReduxState) => state.loading);
    const pokemonData = useSelector((store: ReduxState) => store.pokemon.data);
    const firstOpen = useSelector((state: ReduxState) => state.firstOpen);
    const { id } = useParams();

    useEffect(() => {
        if (loading) {
            const abortController = new AbortController();
            const signal = abortController.signal;
            const fullData: FullData = {
                basicData: '',
                evolutionChain: '',
                specieData: '',
                typeData: '',
            };
            let urltypeData = '';

            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
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
                    dispatch(actionsGenerator.updateDamageRelations(functions.getInfoForDamageBox(fullData)));
                    dispatch(actionsGenerator.setSearchInputValue(''));
                    dispatch(actionsGenerator.setSearching());
                    firstOpen && dispatch(actionsGenerator.setFirstOpen(false));
                    dispatch(actionsGenerator.setLoading());
                })
                .catch((error) => {
                    console.log(error);
                });

            return function cancel() {
                abortController.abort();
            };
        }
    }, [loading]);

    return (
        <Content>
            {loading ? (
                <ImgDiv type={pokemonData.types[0].type.name}>
                    <LoadingImg src={pokeball} />
                </ImgDiv>
            ) : (
                children
            )}
        </Content>
    );
};
