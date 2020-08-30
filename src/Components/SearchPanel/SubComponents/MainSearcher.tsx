import React, { useState, FC } from 'react';
import { Input } from '../../Input';
import styled from 'styled-components';
import { setSearching, setSearchInputValue } from '../../../Redux/Actions';
import closeIcon from '../../../Media/Images/svg/Close.svg';
import { useDispatch } from 'react-redux';
import { ButtonIcon } from '../..';

const SearcherWithoutStyled: FC<{ className?: string; firstOpen: boolean }> = ({ className, firstOpen }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (value: string) => {
        setInputValue(value);
        value.length > 1 && dispatch(setSearchInputValue(value));
    };

    const handleOnClick = () => {
        dispatch(setSearchInputValue(''));
        dispatch(setSearching());
    };

    return (
        <div className={className}>
            <Input fontSize="textVerySmall" onChange={(e) => handleOnChange(e.target.value)} rounded value={inputValue} />
            {!firstOpen && (
                <ButtonIcon svgSize="textVerySmall" onClick={() => handleOnClick()}>
                    <img src={closeIcon} />
                </ButtonIcon>
            )}
        </div>
    );
};

export const MainSearcher = styled(SearcherWithoutStyled)`
    grid-area: searcher;
    display: flex;
    flex-direction: row;
    button {
        grid-area: searcher;
        width: fit-content;
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: 0;
    }
`;
