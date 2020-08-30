import styled from 'styled-components';
import { paddings, mediaQueryResolutions, colors } from '../../VariablesAndConfigs';
import pokeball from '../../../Media/Images/svg/Pokeball.svg';
import { selectTemplateByBool } from '../../../Functions';

export const SearchPanelStyled = styled.article<{ firstOpen: boolean }>`
    ${({ firstOpen }) => `
        display: grid;
        grid-area: pokeProfile;
        grid-template-areas: 'searcher' 'results';
        grid-template-columns: 1fr;
        grid-template-rows: ${selectTemplateByBool('3rem 1fr', '3rem 10rem', firstOpen)};
        box-sizing: border-box;
        background-color: ${colors.backgroundRed};
        background-image: url(${pokeball});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        & > * {
            padding: ${paddings.mobileSize};
        }
        @media (${mediaQueryResolutions.tabletSize}) {
            grid-template-columns: 1fr;
            grid-template-rows: ${selectTemplateByBool('4rem 1fr', '4rem 17rem', firstOpen)};
            & > * {
                padding: ${paddings.tabletSize};
            }
        }
        @media (${mediaQueryResolutions.desktopSize}) {
            grid-template-columns: 1fr;
            grid-template-rows: 5rem 1fr;
            & > * {
                padding: ${paddings.desktopSize};
            }
        }
    `}
`;
