import React, { Component } from 'react';
import Mushroom from '../Mushroom';

class Basket extends Component {
  render() {
    const { mushrooms } = this.props;
    const basketShrooms = () => {
      const basket = mushrooms.map((shroom) => <Mushroom key={shroom.id} mushroom={shroom} />);
      return basket;
    };
    return (
            <div className="basket-container">
                { basketShrooms() }
            </div>
    );
  }
}

export default Basket;
