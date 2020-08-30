import React, { FC } from 'react';
import { DetailPanelStyled } from './SubComponents/DetailPanelStyled';
import { DamageBox, DataBox, StatsBox, EvoChainBox } from '../index';
import { ReduxState } from '../../TS/Types';
import { useSelector } from 'react-redux';

export const DetailPanel: FC = () => {
    const pokemonData = useSelector((store: ReduxState) => store.pokemon.data);
    return (
        <DetailPanelStyled type={pokemonData.types[0].type.name}>
            <DataBox />
            <StatsBox />
            <EvoChainBox />
            <DamageBox />
        </DetailPanelStyled>
    );
};
