import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setSearching } from '../../../Redux/Actions';
import searchIcon from '../../../Media/Images/svg/Search.svg';
import styled from 'styled-components';
import { ButtonIcon } from '../..';
import { mediaQueryResolutions } from '../../VariablesAndConfigs';

const SearcherNoStyled: FC<{ className?: string }> = ({ className }) => {
    const dispatch = useDispatch();
    return (
        <ButtonIcon svgSize="textVerySmall" className={className} onClick={() => dispatch(setSearching())}>
            <img src={searchIcon} />
        </ButtonIcon>
    );
};

export const Searcher = styled(SearcherNoStyled)`
    position: absolute;
    right: 0;
    @media (${mediaQueryResolutions.desktopSize}) {
        left: 586px;
    }
`;
