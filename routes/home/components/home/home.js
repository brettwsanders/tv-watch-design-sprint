import React, { Component } from 'react';
import styles from './home.scss';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      progress: '0%'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.props.getVideo()
    }, 1000);

    //show cursor on mousemove for 5 seconds
    window.addEventListener('mousemove', () => {
      document.body.style.cursor = 'default';
      window.setTimeout(() => {
        document.body.style.cursor = 'none';
      }, 5000);
    });
  }

  onTimeUpdate() {
    const width = `${(100 * (this.videoElement.currentTime / this.videoElement.duration)).toFixed(2)}%`;
    this.setState({ progress: width });
  }

  render() {
    const divStyle = {
      position: 'fixed',
      bottom: 0,
      height: '0.2rem',
      width: this.state.progress,
      background: 'white',
      transition: 'width 2s'
    };
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
          onTimeUpdate={() => this.onTimeUpdate()}
        >
        </video>
        <div className={ styles.metadata }>
          <p><span>{this.props.video.artist}</span></p>
          <p><span>{this.props.video.title}</span></p>
          <p>{'vevo-tv-party.herokuapp.com'}</p>
        </div>
        <div style={divStyle}></div>
      </div>
    );
  }
}
