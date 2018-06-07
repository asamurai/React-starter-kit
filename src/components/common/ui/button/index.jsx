import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './index.sass';

class Button extends PureComponent {
  render () {
    const { title, disabled, onClick } = this.props;
    return (
      <div
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </div>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false
};

export default Button;

