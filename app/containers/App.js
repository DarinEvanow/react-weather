import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
            <Route path="/" component={Nav} />
          </div>
          <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/forecast" component={Forecast} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
