import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Forecast from '../components/Forecast';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div>
            <Nav />
          </div>
          <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;