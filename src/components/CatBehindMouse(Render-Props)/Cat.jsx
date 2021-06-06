import React, { Component } from 'react'
import Cats from '../../assets/Cat.jpg'

import './Cat.css';

export default class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
          <img src={Cats} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt = "Cat"/>
        );
      }
}
