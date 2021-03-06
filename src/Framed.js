'use babel';

import React from 'react';
import logo from './logo.svg';


export default class Framed extends React.Component {

    render() {
        const {bgColor, opacity, top, left, z} = this.props;

        const st = {
          backgroundColor: bgColor,
          opacity: opacity,
          top:  top,
          left: left,
          zIndex: z,

          position: 'absolute',
          width: 200,
          height: 120,
          border: '3px solid #73AD21'
        }

        console.log(st);

        return <div style={st}>
               <img src={logo} className="App-logo" alt="logo" />
               <p>Made with ♥ by Martin!</p>
        </div>
    }
}

Framed.defaultProps = {
          bgColor: 'yellow',
          opacity: '0.5',
          top:  80,
          left: 80,
          z: 1
        };
