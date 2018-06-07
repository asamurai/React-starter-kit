import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Schedule extends PureComponent {
  render () {
    const { loading, error, count } = this.props;
    return (
      <div>
        <h1>Counter Example</h1>
        { loading && <div> Loading ... </div> }
        { !loading && error && <div> {error} </div> }
        { !loading && !error && <div> Counter: {count} </div> }
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
