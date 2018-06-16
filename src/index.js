// import _ from 'lodash';
// import './style.css';
// import printMe from './print.js';

// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
//     element.appendChild(btn);
//     //element.classList.add(btn);
//     return element;
//   }
  
//   document.body.appendChild(component());
//   var sth = document.getElementById('root');
//   console.log(sth);

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello liaoliao</h1>,
    document.getElementById('root')
);