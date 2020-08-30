import styled from 'styled-components';
import { colors, paddings, mediaQueryResolutions } from '../../VariablesAndConfigs';

export const ProfilePanelStyled = styled.article<{ bgColor: string }>`
    ${({ bgColor }) => `
        display: grid;
        grid-area: pokeProfile;
        grid-template-areas: 'image name' 'desc desc';
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 6rem 4rem;
        background-color: ${colors[bgColor.toLowerCase()]};
        box-sizing: border-box;
        & > *{
            padding: ${paddings.mobileSize};
        }
        @media(${mediaQueryResolutions.tabletSize}){
            grid-template-areas: 'image name' 'desc desc';
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 12rem 5rem;
            & > *{
                padding: ${paddings.tabletSize};
            }
        }
        @media(${mediaQueryResolutions.desktopSize}){
            grid-template-areas: 'name' 'desc' 'image';
            grid-template-columns: 1fr;
            grid-template-rows: 13rem 8rem 1fr;
            & > *{
                padding: ${paddings.desktopSize};
            }
        }
    `}
`;
