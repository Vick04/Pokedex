import React from 'react'
import styled from 'styled-components'
import { device } from '../../../Styles/Globals'
import PropTypes from 'prop-types'

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

const miniCard = ({ className, name, number, onMiniCardClick }) => {
    return(
        <div className={ className } onClick={ onMiniCardClick }>
            <img src={ `${process.env.PUBLIC_URL}Media/BoxSprites/${(name).toLowerCase()}.png` } alt={ name }/>
            <div className="title">
                { (number+1).pad(3) }
            </div>
            <div className="subtitle">
                {`${ name.charAt(0).toUpperCase() }${ name.slice(1) }`}
            </div>
        </div>
    )
};

const MiniCard = styled(miniCard)`
    display: grid;

    @media ${ device.laptop }{
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:    "avatar title"
                                "avatar subtitle";
        min-height: 80px;
        background: #FAFAFA;
        border-radius: 25px;
        align-items: center;
        margin: 10px;
        border: 3px solid red;
        color: #C62828;
        font-size: 1em;
        font-weight: 600;
    }

    @media ${ device.lowTablet }{
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-areas:    "avatar"
                                "title"
                                "subtitle";
        min-height: 265px;
    }
    
    .title{
        grid-area: title;
    }

    .subtitle{
        grid-area: subtitle;
    }

    @keyframes changeYposition {
        from {
            margin-bottom: -5px;
        }
      
        to {
            margin-bottom: 12px;
        }
    }

    img{
        grid-area: avatar;
        width: 87px;
    }
    
    :hover{
        cursor: pointer;

        & img {
            animation-duration: 0.1s;
            animation-name: changeYposition;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
    } 
`
MiniCard.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onMiniCardClick: PropTypes.func.isRequired,
}


export default MiniCard;