import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';


// React component incanctation
class App extends Component {
  render() {
    return (
      <div>

        <h1>Happy React Day!</h1>

        <h3>Things to learn about React:</h3>
        <ul>
          <li>HTML inside of JS files</li>
          <li>Class app extends component?!</li>
          <li>Render()?</li>
          <li>import / export</li>
        </ul>
        <h3>Check it out!</h3>
        <PictureGallery />
      </div>
    );
  }
}

export default App;
