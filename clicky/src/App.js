import React from 'react';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import Container from './components/Container'
import Wrapper from './components/Wrapper';
import gameImages from './gameImages.json';
import './App.css';

class App extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0,
    gameImages
  }

  checkClick = (clicked, id) => {
    const newHighScore = (a, b) => {
      if (a === b)
        return a + 1
      else
        return a
    }
  }


    render(){
      return (
        <Wrapper>
          <Scoreboard currentScore={this.state.currentScore}
            highScore={this.state.highScore} />
          <Container>
            {this.state.gameImages.map(image => (
              <Card id={image.image_id}
                key={image.image_id}
                image={image.image_src}
                clicked={image.clicked}
                checkClick={this.checkClick}
              />
            ))}
          </Container>
        </Wrapper>
      )
    }
  }

  export default App;
