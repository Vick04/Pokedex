import React from "react";
import styled from "styled-components";
import { device } from "../../../Styles/Globals";
import { Avatar, Name, Description } from "./Components";
import PropTypes from "prop-types";

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

const miniCard = ({ className, name, number, onClick }) => (
  <div className={className} onClick={onClick}>
    <Avatar
      src={`${
        process.env.PUBLIC_URL
      }Media/BoxSprites/${name.toLowerCase()}.png`}
      alt={name}
    />
    <Description>{(number + 1).pad(3)}</Description>
    <Name>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</Name>
  </div>
);

const MiniCard = styled(miniCard)`
  display: grid;

  @media ${device.laptop} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "avatar name"
      "avatar description";
    min-height: 80px;
    background: #fafafa;
    border-radius: 25px;
    align-items: center;
    margin: 10px;
    border: 3px solid red;
    color: #c62828;
    font-size: 1em;
    font-weight: 600;
  }

  @media ${device.lowTablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
      "avatar"
      "name"
      "description";
    min-height: 265px;
  }

  :hover {
    cursor: pointer;
  }
`;
MiniCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default MiniCard;
