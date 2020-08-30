import styled from 'styled-components';
import { CommonTextInterface } from '../../TS/Interfaces';
import { getSizes } from '../../Functions';
import { mediaQueryResolutions } from '../VariablesAndConfigs';

export const Badge = styled.span<CommonTextInterface>`
    ${({ bgColor, rounded, fontFamily, fontWeight, fontSize, color }) => `
        padding: 0.2rem 0.5rem;
        margin-right: 0.5rem;
        background-color: ${bgColor || 'inherit'};
        border-radius: ${rounded ? '10rem' : ''};
        font-family: ${fontFamily || 'inherit'};
        font-weight: ${fontWeight || 'normal'};
        font-size: ${getSizes(fontSize).mobileSize};
        color: ${color || 'black'};
        box-sizing: border-box;
        @media(${mediaQueryResolutions.tabletSize}){
            font-size: ${getSizes(fontSize).tabletSize};
        }
        @media(${mediaQueryResolutions.desktopSize}){
            font-size: ${getSizes(fontSize).desktopSize};
        }
    `}
`;
