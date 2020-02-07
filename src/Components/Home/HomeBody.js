import styled from "styled-components";

export const HomeBody = styled.div`
  background: #e0e0e0;
  display: grid;
  grid-template-areas:
    "header header"
    "body body"
    "footer footer";
  grid-template-rows: 100px 1fr 100px;
`;
