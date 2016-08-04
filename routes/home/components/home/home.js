import React, { Component } from 'react';
import styles from './home.scss';

export class Home extends Component {

  componentDidMount() {
    window.setTimeout(() => {
      this.props.getVideo()
    }, 1000)
  }

  shouldComponentUpdate(nextProps) {
    const shouldUpdate = this.props.stream !== nextProps.stream;
    return shouldUpdate;
  }

  render() {
    return (
      <div className={ styles.default }>
        <div>
          <img
            src='/images/vevo-logo.png'
            onClick={this.props.getVideo}
          />
        </div>
        <video
          ref={(ref) => this.videoElement = ref}
          autoPlay
          onEnded={this.props.getVideo}
          src={this.props.stream}
        >
        </video>
        <p>{'vevo-tv-party.herokuapp.com'}</p>
      </div>
    );
  }
}
