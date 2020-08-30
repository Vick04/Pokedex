import styled from 'styled-components';
import { paddings, mediaQueryResolutions, colors } from '../../VariablesAndConfigs';

export const DetailPanelStyled = styled.article<{ type?: string }>`
    ${({ type }) => `
        display: grid;
        grid-area: pokeData;
        grid-template-columns: 1fr;        
        grid-auto-rows: max-content;
        background: ${colors[type]}66;
        overflow-y: scroll;
        box-sizing: border-box;
        & > *{
            padding: ${paddings.mobileSize};
            padding-bottom: 2rem;
        }
        @media(${mediaQueryResolutions.tabletSize}){
            grid-template-columns: 1fr 1fr;
            & > *{
                padding: ${paddings.tabletSize};
                padding-bottom: 2rem;
            }
        }
        @media(${mediaQueryResolutions.desktopSize}){
            grid-template-columns: 1fr 1fr;
            & > *{
                padding: ${paddings.desktopSize};
                padding-bottom: 2rem;
            }
            ::-webkit-scrollbar { 
                display: none;
            }
        }
    `}
`;
