// Emulate an es6 environment
import 'babel-core/polyfill';

// Import our various react tools
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import {
  DevTools,
  DebugPanel,
  LogMonitor
} from 'redux-devtools/lib/react';

// Import our store creator and routes config
import store from './config/store';
import routes from './config/routes';

const initialState = {
  // You can add any initial state you want to app to start with here...
  auth: '',
  queue: ['QMZSY1690005'],
  stream: 'http://h264-aws.vevo.com/v3/h264/2016/07/QMZSY1690005/b149e6a1-cc7e-4ff6-917c-a0d158e2c892/qmzsy1690005_high_1280x720_h264_2000_aac_128.mp4'
};

// Create our store with the initial state
const initialStore = store(initialState);

// Render out the root component with the redux provider and debug panel
render(
  <div>
    <Provider store={ initialStore }>
      <ReduxRouter routes={ routes } />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={ initialStore } monitor={ LogMonitor } />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
