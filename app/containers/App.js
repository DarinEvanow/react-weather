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
          <Route render={(props) => {
            return <Nav {...props} />
          }} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forecast" component={Forecast} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
