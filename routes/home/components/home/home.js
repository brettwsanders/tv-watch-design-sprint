import React, { Component } from 'react';
import styles from './home.scss';

export class Home extends Component {
  render() {
    return (
      <div className={ styles.default }>
        <div>I am the Home component</div>
      </div>
    );
  }
}
