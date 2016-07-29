import React, { Component } from 'react';
import styles from './home.scss';

export class Home extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps are', nextProps)
  // }

  shouldComponentUpdate(nextProps) {
    const shouldUpdate = this.props.stream !== nextProps.stream;
    console.log('Updating component: ', shouldUpdate);
    return shouldUpdate;
  }

  render() {
    return (
      <div className={ styles.default }>
        <h1>Go to party.vevo.com on your phone to manage queue!</h1>
        <video
          autoPlay
          controls
          src={this.props.stream}
          onEnded={this.props.getQueue}
          onPause={this.props.onPause}
        >
        </video>
      </div>
    );
  }
}
