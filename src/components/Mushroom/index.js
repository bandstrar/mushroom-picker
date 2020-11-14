import React, { Component } from 'react';

class Mushroom extends Component {
  render() {
    const { mushroom } = this.props;
    return (
            <div className="card">
  <img src={ mushroom.imgUrl} className="card-img-top" alt={ mushroom.name } />
  <div className="card-body">
      <h2 className="mushroom-name">{ mushroom.name}</h2>
  </div>
</div>
    );
  }
}

export default Mushroom;
