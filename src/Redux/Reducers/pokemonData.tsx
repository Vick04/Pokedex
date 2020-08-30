import { UPDATEPROFILE, UPDATEDESCRIPTION, UPDATEDATA, UPDATEEVOLUTIONCHAIN, UPDATESTATS, UPDATEDAMAGERELATIONS } from '../Actions';
import { ActionT, Pokemon } from '../../TS/Types';

const initialState: Pokemon = {
    profile: {
        name: 'pikachu',
        number: 25,
        type: 'electric',
        description: 'PIKA PIKA',
    },
    damageRelations: {
        double_damage_from: [
            {
                name: 'ground',
                url: 'https://pokeapi.co/api/v2/type/5/',
            },
        ],
        double_damage_to: [
            {
                name: 'flying',
                url: 'https://pokeapi.co/api/v2/type/3/',
            },
            {
                name: 'water',
                url: 'https://pokeapi.co/api/v2/type/11/',
            },
        ],
        half_damage_from: [
            {
                name: 'flying',
                url: 'https://pokeapi.co/api/v2/type/3/',
            },
            {
                name: 'steel',
                url: 'https://pokeapi.co/api/v2/type/9/',
            },
            {
                name: 'electric',
                url: 'https://pokeapi.co/api/v2/type/13/',
            },
        ],
        half_damage_to: [
            {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/',
            },
            {
                name: 'electric',
                url: 'https://pokeapi.co/api/v2/type/13/',
            },
            {
                name: 'dragon',
                url: 'https://pokeapi.co/api/v2/type/16/',
            },
        ],
        no_damage_from: [],
        no_damage_to: [
            {
                name: 'ground',
                url: 'https://pokeapi.co/api/v2/type/5/',
            },
        ],
    },
    data: {
        types: [
            {
                slot: 1,
                type: {
                    name: 'electric',
                    url: 'https://pokeapi.co/api/v2/type/13/',
                },
            },
        ],
        abilities: [
            {
                ability: {
                    name: 'static',
                    url: 'https://pokeapi.co/api/v2/ability/9/',
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: 'lightning-rod',
                    url: 'https://pokeapi.co/api/v2/ability/31/',
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        weight: 60,
        height: 4,
    },
    evolutionChain: ['pichu', 'pikachu', 'raichu'],
    stats: [
        {
            base_stat: 35,
            effort: 0,
            stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/',
            },
        },
        {
            base_stat: 55,
            effort: 0,
            stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/',
            },
        },
        {
            base_stat: 40,
            effort: 0,
            stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/',
            },
        },
        {
            base_stat: 50,
            effort: 0,
            stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/',
            },
        },
        {
            base_stat: 50,
            effort: 0,
            stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/',
            },
        },
        {
            base_stat: 90,
            effort: 2,
            stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/',
            },
        },
    ],
};

export const pokemon = (state = initialState, action: ActionT): Pokemon => {
    switch (action.type) {
        case UPDATEPROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case UPDATEDESCRIPTION:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    description: action.description,
                },
            };
        case UPDATEDAMAGERELATIONS:
            return {
                ...state,
                damageRelations: action.damageRelations,
            };
        case UPDATEDATA:
            return {
                ...state,
                data: action.data,
            };
        case UPDATEEVOLUTIONCHAIN:
            return {
                ...state,
                evolutionChain: action.chain,
            };
        case UPDATESTATS:
            return {
                ...state,
                stats: action.stats,
            };
        default:
            return state;
    }
};
