import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Forecast from '../components/Forecast.jsx';
import Detail from '../components/Detail.jsx';

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
