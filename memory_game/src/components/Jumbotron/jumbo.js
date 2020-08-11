import React from 'react';
import "./style.css";


function jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
    <div className="container text-center">
    <h1 className="display-4">Avatar Memory Game</h1>
    {props.message ? (<h1 className="navbar-brand" >{props.message}</h1>) : (<h1 className="navbar-brand" >Click an image to start the game!</h1>)}
    <br></br>
    <h3 className="navbar-brand" >Score: {props.count} | High Score: {props.highScore}</h3>
  </div>
</div>
    )
}

export default jumbotron;