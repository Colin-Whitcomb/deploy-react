import React, { Component } from "react";
import CharacterCard from './components/CharacterCard/index';
import Wrapper from './components/Wrapper/index';
import characters from './characters.json';
import Jumbotron from "./components/Jumbotron/jumbo";
import Navbar from "./components/Navbar/navbar"


class App extends Component {

    state = {
        characters: characters
    };

render () {
    return (
        <Wrapper>
            <Navbar />
            <Jumbotron />
            <h2 className="title">React Memory Game!</h2>
            {this.state.characters.map(character => (
                <CharacterCard 
                name={character.name}
                image={character.image}
                id={character.idid}
            />
            ))}
           
             
        </Wrapper>
    );
}
}
export default App;