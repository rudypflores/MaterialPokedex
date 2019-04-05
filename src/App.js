import React, { Component } from 'react';
import './App.css';
import PokeAPI from './util/PokeAPI';
import RenderPokemon from './components/RenderPokemon';


class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         pokemon : {},
         value: '',
         ready: false
      };   
      this.renderPokemon = this.renderPokemon.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   //Query for API and rendering
   renderPokemon(query, ext) {
      //Fetch API, wait until done. Then set state to values
      PokeAPI.search(query, ext).then(pokemon => {
         this.setState({pokemon : pokemon, ready: true});
         return pokemon;
      });      
   }

   //Set the value state to the user's input
   handleChange(event) {
      this.setState({value: event.target.value});
   }

   //We do something with that value state
   handleSubmit(event) {
      //Fetch API and change state
      this.renderPokemon("https://pokeapi.co/api/v2/pokemon/", this.state.value.toLowerCase());
      event.preventDefault();
   }

   render() {
      //Return JSX
      return (
         <div className="App">
            
            {/*Title*/}
            <h1 style={{margin:0}}><span className="pokedex-title">Pokédex</span> <span className="react-title">React</span></h1>
            <h5 className="material">Made with Material Design</h5>

            {/*Check if the query+request was made and if so we render the UI*/}
            {this.state.ready && this.state.pokemon ? <RenderPokemon pokemon={this.state.pokemon}/> : null}

            {/*User query for pokemon generation*/}
            <form onSubmit={this.handleSubmit}>
               <div className="group">
                  <input type="text" value={this.state.value} onChange={this.handleChange} required/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Pokémon</label>
               </div>
            </form>

            {/*Copyright*/}
            <p className="copyright">Rudy Flores 2019</p>
         </div>
      );
   }
}

export default App;
