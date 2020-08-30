import styled from 'styled-components';
import { mediaQueryResolutions } from '../VariablesAndConfigs';
import { selectTemplateByBool } from '../../Functions';

export const MainPanel = styled.section<{ firstOpen: boolean }>`
    ${({ firstOpen }) => `
        display: grid;
        height: 100%;
        grid-template-areas: ${selectTemplateByBool(`'pokeProfile'`, `'pokeProfile' 'pokeData'`, firstOpen)};
        grid-template-columns: 1fr;
        grid-template-rows: ${selectTemplateByBool('100vh', 'max-content 1fr', firstOpen)};
        @media (${mediaQueryResolutions.tabletSize}) {
            grid-template-areas: ${selectTemplateByBool(`'pokeProfile'`, `'pokeProfile' 'pokeData'`, firstOpen)};
            grid-template-columns: 1fr;
            grid-template-rows: ${selectTemplateByBool('100vh', 'max-content 1fr', firstOpen)};
        }
        @media (${mediaQueryResolutions.desktopSize}) {
            grid-template-areas: ${selectTemplateByBool(`'pokeProfile'`, `'pokeProfile pokeData'`, firstOpen)};
            grid-template-columns: ${selectTemplateByBool('1fr', '652px 1fr', firstOpen)};
            grid-template-rows: 100vh;
        }
    `}
`;
