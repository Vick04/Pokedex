import React, { Fragment, FC } from 'react';
import { useSelector } from 'react-redux';
import { MiniImage } from '../../MiniImage';
import { LabelDataGrid, Text } from '../..';
import { capitalize, getPokemonNumber } from '../../../Functions';
import { ReduxState } from '../../../TS/Types';

export const EvoChainBox: FC = () => {
    const mainPokemon = useSelector((store: ReduxState) => store.pokemon.profile);
    const evolutionChainNames = useSelector((store: ReduxState) => store.pokemon.evolutionChain);

    return (
        <LabelDataGrid title="Evolution Chain">
            {evolutionChainNames.map((name) => (
                <Fragment key={name}>
                    {mainPokemon.name === name ? (
                        <>
                            <div style={{ justifySelf: 'center' }}>
                                <MiniImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonNumber(name)}.png`} size="80px" />
                            </div>
                            <Text fontSize="textSmall" fontWeight="bold">
                                {capitalize(name)}
                            </Text>
                        </>
                    ) : (
                        <>
                            <div style={{ justifySelf: 'center' }}>
                                <MiniImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonNumber(name)}.png`} size="60px" />
                            </div>
                            <Text fontSize="textVerySmall">{capitalize(name)}</Text>
                        </>
                    )}
                </Fragment>
            ))}
        </LabelDataGrid>
    );
};
