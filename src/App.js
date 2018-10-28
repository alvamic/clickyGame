import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Container from "./Container";
import Row from "./Table";
import {Column} from "./Table";
import friends from "./friends.json";
import "./App.css";



class App extends Component {
  state = {
    friends,
    yourScore: 0,
    bestScore: 0,
    answer: "",
    clicked: [],
  };

  clickHandler = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.scoreChanger();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.reset();
    }
  };

  scoreChanger = () => {
    const newScore = this.state.yourScore + 1;
    this.setState({
      yourScore: newScore,
      answer: ""
    });
    if (newScore >= this.state.bestScore) {
      this.setState({ bestScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ answer: "You win!" });
    }
    this.shuffler();
  };

  reset = () => {
    this.setState({
      yourScore: 0,
      bestScore: this.state.bestScore,
      answer: "BOOM!",
      clicked: []
    });
    this.shuffler();
  };

  shuffler = () => {
    let shuffledFriends = randomizer(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Peter Peter Peter"
          score={this.state.yourScore}
          bestScore={this.state.bestScore}
          answer={this.state.answer}
        />


        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  clickHandler={this.clickHandler}
                  scoreChanger={this.scoreChanger}
                  reset={this.reset}
                  shuffler={this.shuffler}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
function randomizer(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default App;