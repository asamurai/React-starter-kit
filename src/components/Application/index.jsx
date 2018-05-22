import React, { Component } from 'react';

import Main from '../../containers/Main';

import '../../../assets/style/index.sass';

class Application extends Component {
    render () {
        return (
            <div>
                <h1>Counter Example</h1>
                <Main/>
            </div>
        );
    }
}

export default Application;

