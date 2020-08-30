import styled from 'styled-components';
import { getSizes } from '../../Functions';
import { mediaQueryResolutions } from '../VariablesAndConfigs';

export const ButtonIcon = styled.button<{ svgSize: string }>`
    ${({ svgSize }) => `
        width: fit-content;
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: 0;
        svg{
            width: ${getSizes(svgSize).mobileSize};
            @media (${mediaQueryResolutions.tabletSize}) {
                width: ${getSizes(svgSize).tabletSize};
            }
            @media (${mediaQueryResolutions.desktopSize}) {
                width: ${getSizes(svgSize).desktopSize};
            }
        }
    `}
`;
