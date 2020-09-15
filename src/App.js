import React, { Component } from 'react'; // eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';


// React component incanctation
class App extends Component {
  render() {
    return (
      <div>
        <h1>Happy React Day!</h1>
        <h3>Things to learn about React:</h3>
        <ThingsToLearn />
        <h3>Check it out!</h3>
        <PictureGallery />
      </div>
    );
  }
}

export default App;
