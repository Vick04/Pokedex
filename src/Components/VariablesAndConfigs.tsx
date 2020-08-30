import { SizesI } from '../TS/Types';

export const mediaQueryResolutions: SizesI = {
    mobileSize: 'min-width: 320px',
    tabletSize: 'min-width: 834px',
    desktopSize: 'min-width: 1440px',
};

export const textVerySmall: SizesI = {
    mobileSize: '1rem',
    tabletSize: '1.5rem',
    desktopSize: '1.5rem',
};

export const textSmall: SizesI = {
    mobileSize: '1.5rem',
    tabletSize: '2rem',
    desktopSize: '2rem',
};

export const textMedium: SizesI = {
    mobileSize: '2rem',
    tabletSize: '3rem',
    desktopSize: '3rem',
};

export const textLarge: SizesI = {
    mobileSize: '3rem',
    tabletSize: '8rem',
    desktopSize: '8rem',
};

export const paddings: SizesI = {
    mobileSize: '.5rem 1rem',
    tabletSize: '.5rem 1rem',
    desktopSize: '1rem 2rem',
};

export const colors: { [key: string]: string } = {
    bug: '#92BC2C',
    dark: '#595761',
    dragon: '#0C69C8',
    electric: '#F2D94E',
    fire: '#FBA54C',
    fairy: '#EE90E6',
    fighting: '#D3425F',
    flying: '#A1BBEC',
    ghost: '#5F6DBC',
    grass: '#5FBD58',
    ground: '#DA7C4D',
    ice: '#75D0C1',
    normal: '#A0A29F',
    poison: '#B763CF',
    psychic: '#FA8581',
    rock: '#C9BB8A',
    steel: '#5695A3',
    water: '#539DDF',
    veryLowLevel: '#F01212',
    lowLevel: '#F6AE41',
    mediumLevel: '#FAF231',
    highLevel: '#38BF4B',
    backgroundRed: '#EF2626',
};
