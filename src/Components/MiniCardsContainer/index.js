import React from 'react'
import MiniCard from './MiniCard'
import styled from 'styled-components'
import { device } from '../../Styles/Globals'
import PropTypes from 'prop-types'

const Container = styled.div`
    background: #E0E0E0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    @media ${ device.lowTablet }{
        grid-template-columns: repeat(3, 1fr);
    }
`

const MiniCardsContainer = ({ data, onMiniCardSelected }) => {
        const handleMiniCardClick = pok => {
            onMiniCardSelected(pok);
        }
        return(
            <Container>
                {data.pokemon.slice(0, 151).map(
                    (pokemon, i) => (<MiniCard key={pokemon.name} name={pokemon.name} number={i} onMiniCardClick={() => handleMiniCardClick(pokemon.name)}></MiniCard>)
                )
            }
            </Container>
        )
    }

MiniCardsContainer.propTypes = {
    data: PropTypes.object,
    onMiniCardSelected: PropTypes.func.isRequired,
}


export default MiniCardsContainer;