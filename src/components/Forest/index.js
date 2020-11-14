import React, { Component } from 'react';
import Mushroom from '../Mushroom';

class Forest extends Component {
  render() {
    const { mushrooms } = this.props;
    const forestShrooms = () => {
      const forest = mushrooms.map((shroom) => <Mushroom key={shroom.id} mushroom={shroom} />);
      return forest;
    };
    return (
            <div className="d-flex flex-row forest-container">
                { forestShrooms() }
            </div>
    );
  }
}

export default Forest;
