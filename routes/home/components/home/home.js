import React, { Component } from 'react';
import styles from './home.scss';

export class Home extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps are', nextProps)
  }

  render() {
    return (
      <div className={ styles.default }>
        <h1>Go to party.vevo.com on your phone to manage queue!</h1>
        <video
          autoPlay
          controls
          src={this.props.stream}
        >
        </video>
      </div>
    );
  }
}
