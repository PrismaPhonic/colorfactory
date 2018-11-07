import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h3>Welcome to Color Factory</h3>
        <h1><Link>Add a color</Link></h1>

        <p>Please select a color.</p>
        <ul>
          {this.props.colors.map(color => <li><Link to={`/colors/${color.name}`}>{color.name}</Link></li>)}
        </ul>
      </div>
    );
  }
}

export default Home;