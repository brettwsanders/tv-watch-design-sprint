import React, { Component } from 'react';
import styles from './home.scss';

const videoSrc = "http://h264-aws.vevo.com/v3/h264/2016/07/QMZSY1690005/b149e6a1-cc7e-4ff6-917c-a0d158e2c892/qmzsy1690005_high_1280x720_h264_2000_aac_128.mp4"

export class Home extends Component {
  render() {
    return (
      <div className={ styles.default }>
        <h1>Go to party.vevo.com on your phone to manage queue!</h1>
        <video autoPlay src={videoSrc}></video>
      </div>
    );
  }
}
