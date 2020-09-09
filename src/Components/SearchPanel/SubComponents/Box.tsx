import styled from 'styled-components';
import { mediaQueryResolutions } from '../../VariablesAndConfigs';
import { MiniImage } from '../..';

export const Box = styled.div`
    width: 80px;
    ${MiniImage} {
        width: 60px;
        height: 60px;
    }
    @media (${mediaQueryResolutions.tabletSize}) {
        width: 120px;
        ${MiniImage} {
            width: 80px;
            height: 80px;
        }
    }
    @media (${mediaQueryResolutions.desktopSize}) {
        width: 120px;
        ${MiniImage} {
            width: 80px;
            height: 80px;
        }
    }
`;
