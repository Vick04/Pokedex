import styled from 'styled-components';
import { PercentBarInterface } from '../../../TS/Interfaces';
import { calcPercent, getColorByPercent } from '../../../Functions';

export const Bar = styled.div<PercentBarInterface>`
    ${({ barColor, barHeight, max, rounded, value }) => `    
        grid-area: bar;
        width: ${calcPercent(value, max)}%;
        height: ${barHeight || '100%'};
        background-color: ${barColor || getColorByPercent(value, max)};
        border-radius: ${rounded ? '50px' : ``};
    `}
`;
