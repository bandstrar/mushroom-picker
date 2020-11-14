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

  render() {
    const { forestShrooms, basketShrooms } = this.state;
    return (
      <div className="App">
        <Forest mushrooms={ forestShrooms } />
        <Basket mushrooms={ basketShrooms } />
      </div>
    );
  }
}

export default App;
