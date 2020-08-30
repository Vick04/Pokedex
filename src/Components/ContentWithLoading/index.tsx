import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../TS/Types';
import { colors } from '../VariablesAndConfigs';
import pokeball from '../../Media/Images/svg/Pokeball.svg';

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

export const ContentWithLoading: FC<{ children: ReactNode }> = ({ children }) => {
    const loading = useSelector((state: ReduxState) => state.loading);
    const pokemonData = useSelector((store: ReduxState) => store.pokemon.data);
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
