import React, { Fragment, FC } from 'react';
import { Text, ThreeColumn, PercentBar } from '../../index';
import { Stat, ReduxState } from '../../../TS/Types';
import { capitalize } from '../../../Functions';
import { useSelector } from 'react-redux';

export const StatsBox: FC = () => {
    const stats = useSelector((state: ReduxState) => state.pokemon.stats);

    return (
        <ThreeColumn title="Stats">
            {stats.map((stat: Stat) => (
                <Fragment key={stat.stat.name}>
                    <Text fontSize="textVerySmall">{capitalize(stat.stat.name)}:</Text>
                    <Text fontSize="textVerySmall">{stat.base_stat}</Text>
                    <PercentBar fontSize="textVerySmall" max={255} rounded value={stat.base_stat}>
                        {stat.base_stat}
                    </PercentBar>
                </Fragment>
            ))}
        </ThreeColumn>
    );
};
