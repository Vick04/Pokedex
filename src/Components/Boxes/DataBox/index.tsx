import React, { FC } from 'react';
import { Badge, Text, LabelDataGrid } from '../../index';
import { AbilityI, ReduxState } from '../../../TS/Types';
import { colors } from '../../VariablesAndConfigs';
import { capitalize } from '../../../Functions';
import { useSelector } from 'react-redux';

export const DataBox: FC = () => {
    const data = useSelector((state: ReduxState) => state.pokemon.data);

    const getAbility = (type?: 'hidden') => {
        let ability: AbilityI[];
        if (type) {
            ability = data.abilities.filter((abi) => abi.is_hidden === true);
        } else {
            ability = data.abilities.filter((abi) => abi.is_hidden === false);
        }
        const res = ability[0] ? ability[0].ability.name : 'none';
        return res;
    };

    return (
        <LabelDataGrid title="Data">
            <Text fontSize="textVerySmall">Type:</Text>
            <div>
                {data.types.map((type) => (
                    <Badge
                        bgColor={colors[type.type.name.toLowerCase()]}
                        color="white"
                        fontSize="textVerySmall"
                        key={type.type.name}
                        rounded
                    >
                        {capitalize(type.type.name)}
                    </Badge>
                ))}
            </div>
            <Text fontSize="textVerySmall">Ability:</Text>
            <Text fontSize="textVerySmall">{capitalize(getAbility())}</Text>
            <Text fontSize="textVerySmall">Hidden Ability:</Text>
            <Text fontSize="textVerySmall">{capitalize(getAbility('hidden'))}</Text>
            <Text fontSize="textVerySmall">Weight:</Text>
            <Text fontSize="textVerySmall">{data.weight}</Text>
            <Text fontSize="textVerySmall">Height:</Text>
            <Text fontSize="textVerySmall">{data.height}</Text>
        </LabelDataGrid>
    );
};
