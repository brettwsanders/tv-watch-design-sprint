import { connect } from 'react-redux';
import { Home } from '../components/home';

import { getToken } from 'modules/auth/actions';
import { getQueue } from 'modules/queue/actions'

const mapStateToProps = (state) => {
  return {
    stream: state.stream
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    getQueue: () => { dispatch(getQueue) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
