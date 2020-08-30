import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, LabelDataGrid, Text } from '../..';
import { capitalize } from '../../../Functions';
import { DamageType, ReduxState } from '../../../TS/Types';
import { colors } from '../../VariablesAndConfigs';
import { updateDamageRelations } from '../../../Redux/Actions';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const DamageBox: FC = () => {
    const dispatch = useDispatch();
    const fullData = useSelector((state: ReduxState) => state.fullData);
    const damageRelations = useSelector((state: ReduxState) => state.pokemon.damageRelations);

    useEffect(() => {
        const json = JSON.parse(fullData.typeData);
        const damageRelationsData = json.damage_relations;
        dispatch(updateDamageRelations(damageRelationsData));
    }, [fullData]);

    const createRow = (label: string, array: DamageType[]) => {
        return (
            <>
                <Text fontSize="textVerySmall">{label}</Text>
                <FlexDiv>
                    {array.map((type: DamageType) => (
                        <Badge bgColor={colors[type.name.toLowerCase()]} color="white" fontSize="textVerySmall" key={type.name} rounded>
                            {capitalize(type.name)}
                        </Badge>
                    ))}
                </FlexDiv>
            </>
        );
    };

    return (
        <LabelDataGrid title="Damage Relations">
            {createRow('Double damage from:', damageRelations.double_damage_from)}
            {createRow('Double damage to:', damageRelations.double_damage_to)}
            {createRow('Half damage from:', damageRelations.half_damage_from)}
            {createRow('Half damage to:', damageRelations.half_damage_to)}
            {createRow('No damage from:', damageRelations.no_damage_from)}
            {createRow('No damage to:', damageRelations.no_damage_to)}
        </LabelDataGrid>
    );
};
