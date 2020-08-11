import React, { Component } from "react";
import CharacterCard from './components/CharacterCard/index';
import Wrapper from './components/Wrapper/index';
import characters from './characters.json';
import Jumbotron from "./components/Jumbotron/jumbo";
import Navbar from "./components/Navbar/navbar"
import { Container, Row, } from './components/Container/container.js'
// import { Container, Row, Col } from 'react-bootstrap'


class App extends Component {

    
    state = {
        characters: characters,
        count: 0,
        chosenCharacters: [],
        highScore: 0,
        message: "Try to guess all 12 characters without clicking duplicates. Click an image to start!",
    };
  
    wasClicked = id => { 
       
        // call game functions
        this.checkChosen(id);

        this.setState({
            characters: this.shuffleCards(characters)
        })
    };

    checkChosen = id => {
        // if user has already chosen, reset game
        if (this.state.chosenCharacters.includes(id)) {
            this.setState({
                chosenCharacters: [],
                count: 0,
                message: "Already picked, try again"
             })
        } else {
            this.state.chosenCharacters.push(id);
            let currentScore = this.state.chosenCharacters.length;
            console.log(currentScore);
            if (this.state.highScore < currentScore){
                this.setState({
                    message: "Good pick! Choose again.",
                    count: currentScore,
                    highScore: currentScore,
                })
            } else {
                this.setState({
                    message: "Good pick! Choose again.",
                    count: currentScore,
                })
            }
        }
    }
    
    shuffleCards = array => {
        // eslint-disable-next-line
        var j, x;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render () {
        return (
            <Wrapper>
                <Navbar
                // count={this.state.count}
                // highScore={this.state.highScore}
                // message={this.state.message}
                />
                <Jumbotron 
                count={this.state.count}
                highScore={this.state.highScore}
                message={this.state.message}
                />

                <Container>
                    <Row>
                      
                {this.state.characters.map(character => (
                    <CharacterCard 
                    chooseCharacter={this.wasClicked}
                    name={character.name}
                    image={character.image}
                    id={character.id}
            
                />
                ))}
                        
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}
export default App;