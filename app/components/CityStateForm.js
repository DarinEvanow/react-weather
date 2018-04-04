import React from 'react';
import PropTypes from 'prop-types';
import getCurrentWeather from '../utils/api';

class CityStateForm extends React.Component {
  static propTypes = {
    cityAndState: PropTypes.string.isRequired,
  }

  state = {
    cityAndState: '',
  }

  handleUpdateCityState = (event) => {
    const value = event.target.value;

    this.setState(() => ({cityAndState: value}));
  }

  handleSubmitCityState = (event) => {
    event.preventDefault();

    console.log(getCurrentWeather(this.state.cityAndState));
  }

  render () {
    return (
      <div>
        <form className='city-state-form'
              style={{flexDirection: this.props.direction}}
              onSubmit={this.handleSubmitCityState}>
          <input className='form-control'
                 type='text' name='citystate'
                 placeholder='San Francisco, California'
                 onChange={this.handleUpdateCityState} />
          <input className='btn btn-success'
                 type='submit'
                 value='Get Weather' />
        </form>
      </div>
    )
  }
}

export default CityStateForm;
