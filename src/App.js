//Init React Component Imports
import React, { Component } from "react";
import Shell from "./Shell";




//Create Point System
var userPoints = 0;

//Check Local Storage Points
if (localStorage.getItem("userPoints")) {
  userPoints = localStorage.getItem("userPoints");
};




//Create Shells
function shell(objShell) {
  //Choose Correct Shell
  var chosen = Math.random() < 0.5;

  //Generate Random Key
  var crypto = require("crypto");
  var id = crypto.randomBytes(20).toString('hex');

  //Clickable Shells
  function playerClick() {
    if (chosen === true) {
      alert("You clicked the correct nutshell! You win!");
      userPoints++;
      localStorage.setItem("userPoints", userPoints);
    }
    else {
      alert("Wrong nutshell! You lose!");
      userPoints = 0;
      localStorage.setItem("userPoints", userPoints);
    }

    //Start New Round
    if(alert("Next Round!")) {}
    else {
      window.location.reload();
    } 
  };

  return(<Shell key={id} value={Math.random() * objShell.length} shellClick={playerClick} correctShell={chosen}/>);
}




class App extends Component {
  constructor(props) {
    super(props)

    let num = new Array(50000);

    this.state = {
      shellArray: [num, num, num]
    };
}

  render() {
    return (
      <div>
        <header className="customHeader">

          <div className="gameLogo">
            SHELL GAME
          </div>

          <div className="pointContainer points customText">

            Score: {userPoints}

          </div>

        </header>

        <div className="shellContainer customText">

          {this.state.shellArray.map(shell)}
          
        </div>
      </div>
    );
  }
}

export default App;
