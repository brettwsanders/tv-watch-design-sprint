import { connect } from 'react-redux';
import { Home } from '../components/home';

import { getVideo } from 'modules/video/actions'

const mapStateToProps = (state) => {
  return {
    stream: state.stream,
    video: state.video
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    getVideo: () => { dispatch(getVideo()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
