import React from "react";

    function navbar (props) {
        return (
        <nav className="navbar navbar-dark bg-dark">
             <a className="navbar-brand" href="/">React Game</a>
             <h4 className="navbar-brand" >Click to start!</h4>
             <h4 className="navbar-brand" >Total Score:{props.count} </h4>
      </nav>
        )
    }


export default navbar;