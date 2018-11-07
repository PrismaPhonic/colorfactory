import React, { Component } from 'react';
import Routes from './Routes';
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
      }
      {
        color: 're',
        code: '#FF0000'
      }
    ]
  }

  render() {
    return (
      <div className="Routes">
        <Route path="/colors"
          render={() => <Home colors={this.props.colors} />} />
      </div>
    );
  }
}

export default Routes;