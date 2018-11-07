import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import './Routes.css';

class Routes extends Component {
  static defaultProps = {
    colors: [
      {
        name: 'pink',
        code: '#FF00B2'
      },
      {
        color: 'green',
        code: '#0FFF00'
      },
      {
        color: 'red',
        code: '#FF0000'
      }
    ]
  }

  render() {
    return (
      <div className="Routes">
        <Route exact path="/colors"
          render={() => <Home colors={this.props.colors} />} />
      </div>
    );
  }
}

export default Routes;