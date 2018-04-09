import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Forecast from '../components/Forecast'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div>
            <Nav />
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route render={function () {
              return <div>No match...</div>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
