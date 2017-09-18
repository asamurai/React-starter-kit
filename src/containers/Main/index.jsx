import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { addCount, removeCount, clearCount } from './../../actions/count.js';

import { Button } from './../../components/ui';

class Main extends Component {
    render () {
        const { loading, error, count } = this.props.counter;
        return (
            <div>
                <div>
                    Counter: {count}
                </div>
                {loading &&
                    <div>
                        Loading ...
                    </div>
                }
                {!loading && error && 
                    <div>
                        {error}
                    </div>
                }
                {!loading &&
                    <div>
                        <Button
                            title="Add counter"
                            onClick={this.props.addCount}
                        />
                        <Button
                            title="Remove counter"
                            onClick={this.props.removeCount}
                        />
                        <Button
                            title="Clear counter"
                            onClick={this.props.clearCount}
                        />
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}


function mapDispatchToProps(dispatch) {
    return {
        addCount: bindActionCreators(addCount, dispatch),
        removeCount: bindActionCreators(removeCount, dispatch),
        clearCount: bindActionCreators(clearCount, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
