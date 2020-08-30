import styled from 'styled-components';
import { CommonTextInterface } from '../../TS/Interfaces';
import { getSizes } from '../../Functions';
import { mediaQueryResolutions } from '../VariablesAndConfigs';

export const Text = styled.label<CommonTextInterface>`
    ${({ fontFamily, fontWeight, fontSize, color }) => `
        width: 100%;
        align-self: center;
        font-family: ${fontFamily || 'inherit'};
        font-weight: ${fontWeight || 'normal'};
        font-size: ${getSizes(fontSize).mobileSize};
        color: ${color || 'black'};
        @media(${mediaQueryResolutions.tabletSize}){
            font-size: ${getSizes(fontSize).tabletSize};
        }
        @media(${mediaQueryResolutions.desktopSize}){
            font-size: ${getSizes(fontSize).desktopSize};
        }
    `}
`;
