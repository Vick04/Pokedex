import styled from 'styled-components';

export const ProfileImage = styled.div<{ link: string }>`
    ${({ link }) => `
        grid-area: image;
        background-image: url(${link});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    `}
`;
