import React, { Component } from 'react';
// import Pokemon from './Pokemon';

class PokeList extends Component {

    render() {
        const {item} = this.props;
        return (
            <React.Fragment>
                <img className="pokemonImage" src={item.url} alt={item.name}/>
                <h2 className="pokemonName">{item.name}</h2>
                <ul className="typeList">
                {item.types.map ((type, index) => {
                    return (
                        <li  className="type" key={index}>{type}</li>
                    )
                })}
                </ul>
            </React.Fragment>

        );
    }
}


export default PokeList;