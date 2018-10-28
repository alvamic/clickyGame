import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="answer">{props.answer}</li>

      <li id="cur-sco">Your Score: {props.score}</li>

      <li id="top-sco">Best Score: {props.bestScore}</li>
    </ul>
  </nav>
);

export default Nav;