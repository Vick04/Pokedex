export type ReduxState = {
    firstOpen: boolean;
    fullData: FullData;
    loading: boolean;
    pokemon: Pokemon;
    searching: boolean;
    searchInputValue: string;
};

export type FullData = {
    basicData: string;
    evolutionChain: string;
    specieData: string;
    typeData: string;
};
// COMPLETE POKEMON TYPE STRUCTURE
// POKEMON TYPE
export type Pokemon = {
    profile: Profile;
    damageRelations: DamageRelations;
    data: Data;
    evolutionChain: string[];
    stats: Stat[];
};
// -- PROFILE TYPE
export type Profile = {
    name: string;
    number: number;
    type: string;
    description: string;
};
// -- DATA TYPE AND ITS SUBTYPES
export type Data = {
    abilities: AbilityI[];
    height: number;
    types: TypeI[];
    weight: number;
};

export type AbilityI = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
};

export type TypeI = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};
// -- STAT TYPE
export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};
// -- DAMAGE RELATIONS TYPE
export type DamageType = {
    name: string;
    url: string;
};

export type DamageRelations = {
    double_damage_from: DamageType[];
    double_damage_to: DamageType[];
    half_damage_from: DamageType[];
    half_damage_to: DamageType[];
    no_damage_from: DamageType[];
    no_damage_to: DamageType[];
};
// END COMPLETE POKEMON TYPE STRUCTURE

export type ActionT = {
    type: string;
    chain?: string[];
    damageRelations?: DamageRelations;
    data?: Data;
    fullData?: FullData;
    description?: string;
    profile?: Profile;
    stats?: Stat[];
    searchInputValue?: string;
};

export type flavorTextEntries = {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: {
        name: string;
        url: string;
    };
};

export type SizesI = {
    mobileSize: string;
    tabletSize: string;
    desktopSize: string;
};
