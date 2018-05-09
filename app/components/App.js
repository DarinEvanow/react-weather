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
import Detail from '../components/Detail';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div>
            <Route path="/" component={Nav} />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/details/:city" component={Detail} />
          </Switch>
        </div>
      </Router>
    )
  }
}
