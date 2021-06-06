import React, { Component } from 'react'
import Cat from '../../assets/Cat.jpg'

export default class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
          <img src={Cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt = "Cat"/>
        );
      }
}
