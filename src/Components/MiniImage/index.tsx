import styled from 'styled-components';

export const MiniImage = styled.img<{ bgColor?: string; size?: string; square?: boolean }>`
    ${({ bgColor, size, square }) => `
        height: ${size || '100%'};
        width: ${size || '100%'};
        border: 3px solid black;
        box-sizing: border-box;
        background-color: ${bgColor || 'white'};
        border-radius: ${!square ? size || '100%' : ``}
    `};
`;
