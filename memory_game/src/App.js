import React from "react";
import CharacterCard from './components/CharacterCard/index';
// import Wrapper from './src/components/Wrapper';
import characters from './characters.json';

function App () {
    return (
        <div>
            <h2 className="title">React Memory Game!</h2>
            <CharacterCard 
                name={characters[0].name}
                image={characters[0].image}
                id={characters[0].id}
            />
        </div>
    );
}

export default App;