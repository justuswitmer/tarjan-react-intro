import React, { Component } from 'react'; // eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';
import getDate from './utils/getDate';

// React component incanctation
class App extends Component {

  state = {
    whatDayIsIt: 'Quinoa Day',
    feeling: 'Dissapointed'
  }

  // When I click a button 
  // I want this to change to
  //whatDayIsIt: 'Cage Day',
  //feeling: 'Clickalus'

  //Save a `this`!
  // Use arrow functions!
  clickalicious = () => {
    console.log('clickalicious was called');

    // Always use this.setState()
    this.setState({
      feeling: 'Clickalus',
      whatDayIsIt: 'Cage Day'
    });
  }

  onFeelingChange = (event) => {
    console.log('event.target', event.target);
    this.setState({
      feeling: event.target.value
    });
  }

  onDayChange = (event) => {
    console.log('event.target', event.target);
    this.setState({
      whatDayIsIt: event.target.value
    });
  }



  // function
  awesomeFunction() {
    console.log('i have state', this.state);
  }

  dateAndFeel() {
    return `${new Date().toLocaleString()} and I feel ${this.state.feeling}`;
  }

  render() {
    // Access state
    console.log('App state is:', this.state);
    console.log('this is', this);



    this.awesomeFunction()
    // Return some JSX
    // JSX = 'Javascript eXtended'
    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>
        <div>Today is {getDate()}</div>

        <input type="text" placeholder="Feeling" onChange={this.onFeelingChange} />
        <input type="text" placeholder="Day" onChange={this.onDayChange} />
        <button onClick={this.clickalicious}>clickalicious</button>
        <h3>Things to learn about React:</h3>
        <ThingsToLearn />
        <h3>Check it out!</h3>
        <PictureGallery />
      </div>

    );
  }
}


function dateAndFeel() {
  return `${new Date().toLocaleString()} and I feel ${this.state.feeling}`;
}

export default App;
