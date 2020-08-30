import styled from 'styled-components';
import { PercentBarInterface } from '../../../TS/Interfaces';
import { getColorByPercent } from '../../../Functions';

export const BarOutline = styled.div<PercentBarInterface>`
    ${({ barColor, barHeight, max, rounded, value }) => `    
        grid-area: bar;
        height: ${barHeight || '100%'};
        padding: 0.2rem;
        border: 0.1rem solid ${barColor || getColorByPercent(value, max)};
        border-radius: ${rounded ? '50px' : ``};
        box-sizing: border-box;
    `}
`;
