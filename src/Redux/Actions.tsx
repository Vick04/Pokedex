import { ActionT, Data, Stat, Profile, FullData, DamageRelations } from '../TS/Types';

export const SETLOADING = 'SETLOADING';
export const SETFIRSTOPEN = 'SETFIRSTOPEN';
export const SETSEARCHING = 'SETSEARCHING';
export const SETSEARCHINPUTVALUE = 'SETSEARCHINPUTVALUE';
export const UPDATEDAMAGERELATIONS = 'UPDATEDAMAGERELATIONS';
export const UPDATEDATA = 'UPDATEDATA';
export const UPDATEDESCRIPTION = 'UPDATEDESCRIPTION';
export const UPDATEFULLDATA = 'UPDATEFULLDATA';
export const UPDATEEVOLUTIONCHAIN = 'UPDATEEVOLUTIONCHAIN';
export const UPDATEPROFILE = 'UPDATEPROFILE';
export const UPDATESTATS = 'UPDATESTATS';

export const setLoading = (): ActionT => {
    return {
        type: SETLOADING,
    };
};

export const setFirstOpen = (): ActionT => {
    return {
        type: SETFIRSTOPEN,
    };
};

export const setSearching = (): ActionT => {
    return {
        type: SETSEARCHING,
    };
};

export const setSearchInputValue = (searchInputValue: string): ActionT => {
    return {
        type: SETSEARCHINPUTVALUE,
        searchInputValue,
    };
};

export const updateDamageRelations = ({ ...damageRelations }: DamageRelations): ActionT => {
    return {
        type: UPDATEDAMAGERELATIONS,
        damageRelations: { ...damageRelations },
    };
};

export const updateData = ({ ...data }: Data): ActionT => {
    return {
        type: UPDATEDATA,
        data: { ...data },
    };
};

export const updateDescription = (description: string): ActionT => {
    return {
        type: UPDATEDESCRIPTION,
        description,
    };
};

export const updateFullData = (fullData: FullData): ActionT => {
    return {
        type: UPDATEFULLDATA,
        fullData,
    };
};

export const updateEvolutionChain = (chain: string[]): ActionT => {
    return {
        type: UPDATEEVOLUTIONCHAIN,
        chain,
    };
};

export const updateProfile = ({ ...profile }: Profile): ActionT => {
    return {
        type: UPDATEPROFILE,
        profile: { ...profile },
    };
};

export const updateStats = (stats: Stat[]): ActionT => {
    return {
        type: UPDATESTATS,
        stats: stats,
    };
};
