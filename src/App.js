import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Card from "./components/cards";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    friends: friends
  };

  randomRender = id => {
    this.state.friends.forEach(image => {
      if (image.id === id) {
        if (image.clicked) {
          alert("YOU LOSE!");
          this.setState({});
          this.resetGame();
          return false;
        } else {
          this.updateScore();
          image.clicked = true;
        }
        if (this.state.score >= this.state.highScore) {
          this.newHighScore();
        }
      }
    });
  };

  randomOrganize = array => {
    let copy = [],
      n = array.length,
      i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ friends: copy });
  };

  updateScore = () => {
    this.setState(
      newState => ({
        score: newState.score + 1
      }),
      () => this.winning()
    );
  };

  newHighScore = () => {
    this.setState(newState => ({
      highScore: newState.score
    }));
  };

  winning = () => {
    if (this.state.score === this.state.friends.length) {
      alert("YOU WON! Congratulations!");
      this.setState({});
      this.resetGame();
    } else {
      setTimeout(() => {
        this.randomOrganize(this.state.friends);
      }, 500);
    }
  };

  resetGame = () => {
    this.state.friends.forEach(image => {
      image.clicked = false;
    });
    this.setState({ score: 0 });
  };

  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          {this.state.friends.map(friend => {
            return (
              <Card
                {...friend}
                key={friend.id}
                randomRender={this.randomRender}
                randomOrganize={() => this.randomOrganize(this.state.friends)}
              />
            );
          })}
        </Wrapper>
      </div>
    );
  }
}

export default App;