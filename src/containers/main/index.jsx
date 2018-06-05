import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Main from '../../components/main';
import { addCount, removeCount, clearCount } from '../../actions/count';

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
