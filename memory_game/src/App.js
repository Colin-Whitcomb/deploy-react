import React from "react";
import CharacterCard from './components/CharacterCard/index';
import Wrapper from './components/Wrapper/index';
import characters from './characters.json';
import Jumbotron from "./components/Jumbotron/jumbo";

function App () {
    return (
        <Wrapper>
            <Jumbotron />
            <h2 className="title">React Memory Game!</h2>
            <CharacterCard 
                name={characters[0].name}
                image={characters[0].image}
                id={characters[0].id}
            />
              <CharacterCard 
                name={characters[1].name}
                image={characters[1].image}
                id={characters[1].id}
            />
             <CharacterCard 
                name={characters[2].name}
                image={characters[2].image}
                id={characters[2].id}
            />
             <CharacterCard 
                name={characters[3].name}
                image={characters[3].image}
                id={characters[3].id}
            />
             <CharacterCard 
                name={characters[4].name}
                image={characters[4].image}
                id={characters[4].id}
            />
        </Wrapper>
    );
}

export default App;