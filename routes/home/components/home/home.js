import React, { Component } from 'react';
import styles from './home.scss';

export class Home extends Component {

  componentDidMount() {
    window.setTimeout(() => {
      this.props.getVideo()
    }, 1000)

    //show cursor on mousemove for 5 seconds
    window.addEventListener('mousemove', () => {
      document.body.style.cursor = 'default';
      window.setTimeout(() => {
        document.body.style.cursor = 'none';
      }, 5000);
    });
  }

  shouldComponentUpdate(nextProps) {
    const shouldUpdate = this.props.stream !== nextProps.stream;
    return shouldUpdate;
  }

  render() {
    return (
      <div className={ styles.default }>
        <div className={ styles.logo }>
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
        <div className={ styles.metadata }>
          <p><span>{this.props.video.artist}</span></p>
          <p><span>{this.props.video.title}</span></p>
          <p>{'vevo-tv-party.herokuapp.com'}</p>
        </div>
      </div>
    );
  }
}
