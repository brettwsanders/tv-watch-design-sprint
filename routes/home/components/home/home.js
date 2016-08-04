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
          <img
            src='/images/vevo-logo.png'
            onClick={this.props.getQueue}
          />
        </div>
        <video
          ref={(ref) => this.videoElement = ref}
          autoPlay
          onEnded={this.props.getQueue}
          src={this.props.stream}
        >
        </video>
      </div>
    );
  }
}
