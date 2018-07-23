//Init React Component Imports
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Shell from "./Shell";




//Create Custom React Functions
const reactCreate = React.createElement;
const reactRender = ReactDOM.render;




//Create Point System
var userPoints = 0;

//Game Message
let message = reactCreate("div", {className: "customText"}, "");

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
      message = reactCreate("div", {className: "customTextCorrect"}, "You clicked the correct nutshell! You win!");
      reactRender(message, document.querySelector("[data-targetMessage]"));

      userPoints++;
      localStorage.setItem("userPoints", userPoints);

      //Next Round
      setInterval(nextRound, 1500);
    }
    else {
      message = reactCreate("div", {className: "customTextWrong"}, "Wrong nutshell! You lose!");
      reactRender(message, document.querySelector("[data-targetMessage]"));

      userPoints = 0;
      localStorage.setItem("userPoints", userPoints);

      //Next Round
      setInterval(nextRound, 1500);
    }
  };

  //Next Round Alert
  function nextRound() {
    //Start New Round
    if(alert("Next Round!")) {}
    else {
      window.location.reload();
    } 
  }

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

        {/*Game Header*/}
        <header className="customHeader">

          <div className="gameLogo">

            SHELL GAME

          </div>

          <div className="pointContainer points customText">

            Score: {userPoints}

          </div>

        </header>


        {/*Shell Selection*/}
        <div className="shellContainer customText">

          {this.state.shellArray.map(shell)}
          
        </div>


        {/*End Game Message*/}
        <div className="customText">

          {message}

        </div>

      </div>
    );
  }
}

export default App;
