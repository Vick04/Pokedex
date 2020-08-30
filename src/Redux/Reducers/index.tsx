import { combineReducers } from 'redux';
import { firstOpen } from './firstOpen';
import { fullData } from './fullData';
import { pokemon } from './pokemonData';
import { loading, searching, searchInputValue } from './searchStatus';

export default combineReducers({
    firstOpen,
    fullData,
    loading,
    pokemon,
    searching,
    searchInputValue,
});
