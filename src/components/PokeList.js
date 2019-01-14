import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {

    render() {
        const {item} = this.props;
        return (
            <React.Fragment>
                <img className="pokemonImage" src={item.url} alt={item.name}/>
                <h2 className="pokemonName">{item.name}</h2>
            </React.Fragment>

        );
    }
}


export default PokeList;