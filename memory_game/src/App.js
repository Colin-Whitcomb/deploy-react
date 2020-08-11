import React, { Component } from "react";
import CharacterCard from './components/CharacterCard/index';
import Wrapper from './components/Wrapper/index';
import characters from './characters.json';
import Jumbotron from "./components/Jumbotron/jumbo";
import Navbar from "./components/Navbar/navbar"



class App extends Component {

    chosenCharacters = [];
    

    state = {
        characters: characters,
        count: 1
    };
  
    chooseCharacter = id => { 
       
        this.chosenCharacters = this.chosenCharacters.concat(id);
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
        console.log(this.chosenCharacters);  

        this.setState({
            characters: this.shuffleCards(characters)
        })
    };
    
    shuffleCards = array => {
        var j, x, i;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render () {
        return (
            <Wrapper>
                <Navbar />
                <Jumbotron />
                {this.state.characters.map(character => (
                    <CharacterCard 
                    chooseCharacter={this.chooseCharacter}
                    name={character.name}
                    image={character.image}
                    id={character.id}
                />
                ))}
              
            </Wrapper>
        );
    }
}
export default App;