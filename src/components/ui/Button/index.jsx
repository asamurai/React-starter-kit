import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.sass';

class Button extends Component {
    render () {
        const { title, onClick } = this.props;
        return (
            <div
                className={styles.button}
                onClick={onClick}
            >
                {title}
            </div>
        );
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;

