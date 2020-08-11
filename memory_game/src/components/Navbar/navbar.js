import React from "react";

    function navbar (props) {
        return (
        <nav className="navbar navbar-dark bg-dark">
             <a className="navbar-brand" href="/">React Game</a>
             {props.message ? (<h4 className="navbar-brand" >{props.message}</h4>) : (<h4 className="navbar-brand" >Click an image to start the game!</h4>)}
             <h4 className="navbar-brand" >Score: {props.count} | High Score {props.highScore}</h4>
      </nav>
        )
    }


export default navbar;