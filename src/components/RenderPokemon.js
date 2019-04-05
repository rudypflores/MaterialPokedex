import React from 'react';
import '../App.css';

class RenderPokemon extends React.Component {
	render() {
		return (
			/*Render the Pokemon UI*/
			<div className="items" >
                <img src={this.props.pokemon.img} alt="sample sprite" className="img"/>
                <p className="name ripple">{this.props.pokemon.name}</p>
                <p className="type ripple">{this.props.pokemon.type}</p>
                <p className="ability ripple">ability: {this.props.pokemon.ability}</p>
            </div>
		);
	}
}

export default RenderPokemon;