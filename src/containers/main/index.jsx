import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../../components/main';
import { addCount, removeCount, clearCount } from '../../state/actions/count';

const mapStateToProps = (state) => ({ counter: state.toJS().counter });

const mapDispatchToProps = (dispatch) => ({
  addCount: bindActionCreators(addCount, dispatch),
  removeCount: bindActionCreators(removeCount, dispatch),
  clearCount: bindActionCreators(clearCount, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
