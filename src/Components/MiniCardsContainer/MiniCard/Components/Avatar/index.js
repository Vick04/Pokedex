import React from "react";
import styled from "styled-components";

const avatar = props => {
  const { className, src, alt } = props;
  return <img className={className} src={src} alt={alt} />;
};

export const Avatar = styled(avatar)`
  @keyframes changeYposition {
    from {
      margin-bottom: -5px;
    }

    to {
      margin-bottom: 12px;
    }
  }
  grid-area: avatar;
  width: 87px;
  &:hover {
    animation-duration: 0.1s;
    animation-name: changeYposition;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;
