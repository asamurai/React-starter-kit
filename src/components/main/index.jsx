import React, { PureComponent } from 'react';
import { Button } from '../../components/common/ui';
import Schedule from '../schedule';

class Main extends PureComponent {
  render () {
    const { loading, error, count } = this.props.counter;
    const { addCount, removeCount, clearCount } = this.props;
      
    return (
      <div>
          <Schedule
            loading={loading}
            error={error}
            count={count}
          />
          <div>
            <Button
              disabled={loading}
              title="Add counter"
              onClick={addCount}
            />
            <Button
              disabled={loading}
              title="Remove counter"
              onClick={removeCount}
            />
            <Button
              disabled={loading}
              title="Clear counter"
              onClick={clearCount}
            />
          </div>
      </div>
    );
  }
}

export default Main;
