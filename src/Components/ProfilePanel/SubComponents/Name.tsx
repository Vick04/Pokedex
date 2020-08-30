import React, { FC } from 'react';
import styled from 'styled-components';
import { Text } from '../../index';

type NameComponentI = {
    className?: string;
    name: string;
    number: number;
};

const NameNoStyled: FC<NameComponentI> = ({ className, name, number }) => {
    return (
        <div className={className}>
            <Text fontSize="textMedium">#{number}</Text>
            <Text fontSize="textLarge" fontWeight="bold">
                {name}
            </Text>
        </div>
    );
};

export const Name = styled(NameNoStyled)`
    display: flex;
    flex-direction: column;
    grid-area: name;
`;
