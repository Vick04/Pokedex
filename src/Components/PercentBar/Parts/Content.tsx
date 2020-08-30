import styled from 'styled-components';
import { Text } from '../../Text';

export const Content = styled.div<{ showValue?: string; valueSideWidth?: string }>`
    ${({ showValue, valueSideWidth }) =>
        showValue &&
        `display: grid;
        grid-template-areas: ${showValue == 'left' ? '"number bar"' : '"bar number"'};
        grid-auto-columns: ${
            showValue == 'left' ? `${valueSideWidth || 'max-content'} 1fr` : `1fr ${valueSideWidth || 'max-content'}`
        };
        align-items: center;
        ${Text} {
            text-align: center;
        }
    `}
`;
