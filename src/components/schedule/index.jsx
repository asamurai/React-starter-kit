import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Schedule extends Component {
  render () {
    const { loading, error, count } = this.props;
    return (
      <div>
        <h1>Counter Example</h1>
        <div> Counter: {count} </div>
        { loading && <div> Loading ... </div> }
        { !loading && error && <div> {error} </div> }
      </div>
    );
  }
}

Schedule.propTypes = {
  count: PropTypes.number,
  error: PropTypes.string,
  loading: PropTypes.bool
};

export default Schedule;
