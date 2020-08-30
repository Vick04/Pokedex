import { ActionT, FullData } from '../../TS/Types';
import basicData from '../../__Mocks__/BasicData.json';
import evolutionChain from '../../__Mocks__/EvolutionChainNormal.json';
import specieData from '../../__Mocks__/SpeciesData.json';
import typeData from '../../__Mocks__/TypeData.json';
import { UPDATEFULLDATA } from '../Actions';

const fullDataInit: FullData = {
    basicData: JSON.stringify(basicData),
    evolutionChain: JSON.stringify(evolutionChain),
    specieData: JSON.stringify(specieData),
    typeData: JSON.stringify(typeData),
};

export const fullData = (state = fullDataInit, action: ActionT): FullData => {
    switch (action.type) {
        case UPDATEFULLDATA:
            return {
                ...action.fullData,
            };
        default:
            return state;
    }
};
