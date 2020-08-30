import { SETSEARCHINPUTVALUE, SETSEARCHING, SETLOADING } from '../Actions';
import { ActionT } from '../../TS/Types';

export const loading = (state = false, action: ActionT): boolean => {
    switch (action.type) {
        case SETLOADING:
            return !state;
        default:
            return state;
    }
};

export const searching = (state = true, action: ActionT): boolean => {
    switch (action.type) {
        case SETSEARCHING:
            return !state;
        default:
            return state;
    }
};

export const searchInputValue = (state = '', action: ActionT): string => {
    switch (action.type) {
        case SETSEARCHINPUTVALUE:
            return (state = action.searchInputValue);
        default:
            return state;
    }
};
