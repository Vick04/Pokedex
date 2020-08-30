import { SETFIRSTOPEN } from '../Actions';
import { ActionT } from '../../TS/Types';

export const firstOpen = (state = true, action: ActionT): boolean => {
    switch (action.type) {
        case SETFIRSTOPEN:
            return !state;
        default:
            return state;
    }
};
