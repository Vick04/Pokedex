import styled from 'styled-components';
import { mediaQueryResolutions } from '../../VariablesAndConfigs';
import { selectTemplateByBool } from '../../../Functions';

export const Results = styled.div<{ firstOpen: boolean }>`
    ${({ firstOpen }) => `
        grid-area: results;
        display: flex;
        gap: 1rem;
        flex-wrap: ${selectTemplateByBool('wrap', '', firstOpen)};
        overflow: ${selectTemplateByBool('auto scroll', 'scroll auto', firstOpen)};
        justify-content: space-between;
        & > div {
            display: flex;
            flex-basis: auto;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: pointer;
        }
        @media (${mediaQueryResolutions.tabletSize}) {
            flex-wrap: wrap;
            align-content: flex-start;
            overflow: auto scroll;
        }
        @media (${mediaQueryResolutions.desktopSize}) {
            ::-webkit-scrollbar {
                display: none;
            }
        }
    `}
`;
