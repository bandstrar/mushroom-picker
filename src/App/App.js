import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Basket from '../components/Basket';
import Forest from '../components/Forest';

class App extends React.Component {
  state = {
    forestShrooms: mushroomData.getMushrooms(),
    basketShrooms: mushroomData.getBasket(),
  }

  resetState = () => {
    this.setState({
      forestShrooms: mushroomData.getMushrooms(),
      basketShrooms: mushroomData.getBasket(),
    });
  }

  pickingMushrooms = () => {
    mushroomData.pickAMushroom();
    this.resetState();
  }

  render() {
    const { forestShrooms, basketShrooms } = this.state;
    return (
      <div className="App">
        <button className='btn btn-success my-2' onClick={this.pickingMushrooms}>Pick a Mushroom</button>
        <Forest mushrooms={ forestShrooms } />
        <Basket mushrooms={ basketShrooms } />
      </div>
    );
  }
}

export default App;
