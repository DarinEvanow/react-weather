import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../components/Home';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div>
          <Nav />
        </div>
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <Home />
        </div>
      </div>
    )
  }
}

export default App;