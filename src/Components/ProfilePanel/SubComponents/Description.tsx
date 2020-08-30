import React from 'react';
import styled from 'styled-components';
import { Text } from '../../index';

type DescriptionComponentI = {
    className?: string;
    desc: string;
};

const DescriptionNoStyled = ({ className, desc }: DescriptionComponentI) => {
    return (
        <div className={className}>
            <Text fontSize="textVerySmall">{desc}</Text>
        </div>
    );
};

export const Description = styled(DescriptionNoStyled)`
    grid-area: desc;
    display: flex;
    align-items: flex-start;
`;
