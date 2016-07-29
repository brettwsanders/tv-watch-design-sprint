import React, { Component } from 'react';
import styles from './home.scss';

export class Home extends Component {

  componentDidMount() {
    window.setTimeout(() => {
      this.props.getQueue()
    }, 1000)
  }

  shouldComponentUpdate(nextProps) {
    const shouldUpdate = this.props.stream !== nextProps.stream;
    // console.log('Updating component: ', shouldUpdate);
    return shouldUpdate;
  }

  render() {
    return (
      <div className={ styles.default }>
        <div>
          <img src='/images/vevo-logo.png' />
          <h3>Go here on your phone to add songs to the party queue</h3>
          <h1>vevo-tv-party.herokuapp.com</h1>
        </div>
        <video
          ref={(ref) => this.videoElement = ref}
          autoPlay
          onEnded={this.props.getQueue}
          src={this.props.stream}
        >
        </video>
        <button
          ref={(ref) => this.skipButton = ref}
          onClick={this.props.getQueue}
        >
          Skip
        </button>
      </div>
    );
  }
}
