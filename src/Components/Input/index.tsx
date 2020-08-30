import styled from 'styled-components';
import { CommonTextInterface } from '../../TS/Interfaces';
import { getSizes } from '../../Functions';
import { mediaQueryResolutions } from '../VariablesAndConfigs';

export const Input = styled.input<CommonTextInterface>`
    ${({ bgColor, color, fontFamily, fontWeight, fontSize, rounded }) => `
        width: 100%;
        box-sizing: border-box;
        background-color: ${bgColor || 'white'};
        border: 1px solid #ddd;
        border-radius: ${rounded ? '10rem' : ''};
        font-family: ${fontFamily || 'inherit'};
        font-weight: ${fontWeight || 'normal'};
        font-size: ${getSizes(fontSize).mobileSize};
        padding: 0 ${getSizes(fontSize).mobileSize};
        color: ${color || 'black'};
        @media(${mediaQueryResolutions.tabletSize}){
            font-size: ${getSizes(fontSize).tabletSize};
            padding: 0 ${getSizes(fontSize).tabletSize};
        }
        @media(${mediaQueryResolutions.desktopSize}){
            font-size: ${getSizes(fontSize).desktopSize};
            padding: 0 ${getSizes(fontSize).desktopSize};
        }
    `}
`;
