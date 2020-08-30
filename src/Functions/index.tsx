import { textVerySmall, textSmall, textMedium, textLarge } from '../Components/VariablesAndConfigs';
import { colors } from '../Components/VariablesAndConfigs';
import { SizesI, FullData, Profile, flavorTextEntries, Data, Stat } from '../TS/Types';
import pokemonList from '../__Mocks__/pokemonList.json';

export const calcPercent = (value: number, max: number): number => {
    return Number(((value * 100) / max).toFixed(0));
};

export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const createRepeatString = (subString: string, cant: number, otherSubString?: string, positionOfOtherSubString?: number): string => {
    let res = '';
    if (positionOfOtherSubString && otherSubString) {
        for (let i = 0; i < cant; i++) {
            positionOfOtherSubString - 1 === i ? (res += otherSubString) : (res += subString);
        }
    } else {
        for (let i = 0; i < cant; i++) {
            res += subString;
        }
    }
    return res;
};

export const getPokemonNumber = (name: string): number => {
    const list = pokemonList.pokemon;
    const pokemon = list.filter((p) => p.name === name)[0];
    return pokemon.number;
};

export const getSizes = (size: string): SizesI => {
    if (size === 'textVerySmall') {
        return textVerySmall;
    } else if (size === 'textSmall') {
        return textSmall;
    } else if (size === 'textMedium') {
        return textMedium;
    } else {
        return textLarge;
    }
};

export const getColorByPercent = (value: number, max: number): string => {
    const percent = calcPercent(value, max);
    if (percent <= 19) {
        return colors.veryLowLevel;
    } else if (percent <= 31) {
        return colors.lowLevel;
    } else if (percent <= 43) {
        return colors.mediumLevel;
    } else {
        return colors.highLevel;
    }
};

export const selectTemplateByBool = (trueOption: string, falseOption: string, value: boolean): string => {
    return value ? trueOption : falseOption;
};

export const getInfoForProfilePanel = (fullData: FullData): Profile => {
    const basicData = JSON.parse(fullData.basicData);
    const specieData = JSON.parse(fullData.specieData);
    const descriptions = specieData.flavor_text_entries.filter((text: flavorTextEntries) => text.language.name === 'en');
    return {
        name: basicData.name,
        number: basicData.id,
        type: basicData.types[0].type.name,
        description: descriptions[0].flavor_text,
    };
};

export const getInfoForDataBox = (fullData: FullData): Data => {
    const json = JSON.parse(fullData.basicData);
    return {
        abilities: json.abilities,
        height: json.height,
        types: json.types,
        weight: json.weight,
    };
};

export const getInfoForStatsBox = (fullData: FullData): Stat[] => {
    const json = JSON.parse(fullData.basicData);
    return json.stats;
};

export const getInfoForEvoChainBox = (fullData: FullData): string[] => {
    const evolutionChain = fullData.evolutionChain;
    const json = JSON.parse(evolutionChain);
    let member = json.chain;
    const res: string[] = [];

    if (member.evolves_to.length === 0) {
        res.push(member.species.name);
    } else if (member.evolves_to.length === 1) {
        do {
            res.push(member.species.name);
            member = member.evolves_to[0];
        } while (member != null);
    } else {
        res.push(member.species.name);
        member.evolves_to.map((subMember: { species: { name: string } }) => res.push(subMember.species.name));
    }
    return res;
};
