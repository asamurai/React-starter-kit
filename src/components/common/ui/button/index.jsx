import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

class ButtonComponent extends PureComponent {
  render () {
    const { title, disabled, onClick } = this.props;
    return (
      <Button
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </Button>
    );
  }
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

ButtonComponent.defaultProps = {
  disabled: false
};

export default ButtonComponent;

