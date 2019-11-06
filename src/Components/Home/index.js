import React, { Component } from 'react'
import MiniCardsContainer from './../MiniCardsContainer'

class Home extends Component{
    data = require('./../../Data/PokemonList');

    handleMiniCardSelected = pok => (
        console.log(pok)
    );

    render(){
        return(
            <div>
                <MiniCardsContainer data={ this.data } onMiniCardSelected={ this.handleMiniCardSelected }/>
            </div>
        )
    }
}



export default Home;