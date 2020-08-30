import * as functions from '../../Functions';
import { textVerySmall, textSmall, textMedium, textLarge, colors } from '../../Components/VariablesAndConfigs';
import basicData from '../../__Mocks__/BasicData.json';
import evolutionChainNormal from '../../__Mocks__/EvolutionChainNormal.json';
import evolutionChainEevee from '../../__Mocks__/evolutionChainEevee.json';
import evolutionChainNull from '../../__Mocks__/evolutionChainNull.json';
import specieData from '../../__Mocks__/SpeciesData.json';
import typeData from '../../__Mocks__/TypeData.json';
import { FullData, Stat } from '../../TS/Types';

const fullDataMock: FullData = {
    basicData: JSON.stringify(basicData),
    evolutionChain: JSON.stringify(evolutionChainNormal),
    specieData: JSON.stringify(specieData),
    typeData: JSON.stringify(typeData),
};

describe('Functions', () => {
    test('calcPercent', () => {
        const value = functions.calcPercent(50, 200);
        expect(value).toEqual(25);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('capitalize', () => {
        const res = functions.capitalize('pikachu');
        expect(res).toEqual('Pikachu');
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    describe('createRepeatString', () => {
        test('Common parameters', () => {
            const res = functions.createRepeatString('1fr ', 5);
            expect(res).toEqual('1fr 1fr 1fr 1fr 1fr ');
        });
        test('With other substring', () => {
            const res = functions.createRepeatString('1fr ', 5, '200px ');
            expect(res).toEqual('1fr 1fr 1fr 1fr 1fr ');
        });
        test('With other substring and its position', () => {
            const res = functions.createRepeatString('1fr ', 5, '200px ', 2);
            expect(res).toEqual('1fr 200px 1fr 1fr 1fr ');
        });
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    describe('getSizes', () => {
        test('textVerySmall', () => {
            const res = functions.getSizes('textVerySmall');
            expect(res).toEqual(textVerySmall);
        });
        test('textSmall', () => {
            const res = functions.getSizes('textSmall');
            expect(res).toEqual(textSmall);
        });
        test('textMedium', () => {
            const res = functions.getSizes('textMedium');
            expect(res).toEqual(textMedium);
        });
        test('textLarge', () => {
            const res = functions.getSizes('textLarge');
            expect(res).toEqual(textLarge);
        });
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    describe('getColorByPercent', () => {
        test('veryLowLevel', () => {
            const res = functions.getColorByPercent(10, 255);
            expect(res).toEqual(colors.veryLowLevel);
        });
        test('lowLevel', () => {
            const res = functions.getColorByPercent(60, 255);
            expect(res).toEqual(colors.lowLevel);
        });
        test('mediumLevel', () => {
            const res = functions.getColorByPercent(100, 255);
            expect(res).toEqual(colors.mediumLevel);
        });
        test('highLevel', () => {
            const res = functions.getColorByPercent(200, 255);
            expect(res).toEqual(colors.highLevel);
        });
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    describe('selectTemplateByBool', () => {
        test('trueOption', () => {
            const res = functions.selectTemplateByBool('OptionTrue', 'OptionFalse', true);
            expect(res).toEqual('OptionTrue');
        });
        test('falseOption', () => {
            const res = functions.selectTemplateByBool('OptionTrue', 'OptionFalse', false);
            expect(res).toEqual('OptionFalse');
        });
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('getInfoForProfilePanel', () => {
        const res = functions.getInfoForProfilePanel(fullDataMock);
        const estimated = {
            name: 'pikachu',
            number: 25,
            type: 'electric',
            description: 'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
        };
        expect(res).toEqual(estimated);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('getInfoForDataBox', () => {
        const res = functions.getInfoForDataBox(fullDataMock);
        const estimated = {
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
            height: 4,
            types: [
                {
                    slot: 1,
                    type: {
                        name: 'electric',
                        url: 'https://pokeapi.co/api/v2/type/13/',
                    },
                },
            ],
            weight: 60,
        };
        expect(res).toEqual(estimated);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('getInfoForStatsBox', () => {
        const res = functions.getInfoForStatsBox(fullDataMock);
        const estimated: Stat[] = [
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
        ];
        expect(res).toEqual(estimated);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    describe('getInfoForEvoChainBox', () => {
        test('Normal evolution chain', () => {
            const res = functions.getInfoForEvoChainBox(fullDataMock);
            const estimated: string[] = ['pichu', 'pikachu', 'raichu'];
            expect(res).toEqual(estimated);
        });
        test('Eevee evolution chain', () => {
            const newFullData = {
                ...fullDataMock,
                evolutionChain: JSON.stringify(evolutionChainEevee),
            };
            const res = functions.getInfoForEvoChainBox(newFullData);
            const estimated: string[] = ['eevee', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon'];
            expect(res).toEqual(estimated);
        });
        test('Null evolution chain', () => {
            const newFullData = {
                ...fullDataMock,
                evolutionChain: JSON.stringify(evolutionChainNull),
            };
            const res = functions.getInfoForEvoChainBox(newFullData);
            const estimated: string[] = ['pichu'];
            expect(res).toEqual(estimated);
        });
    });
});
