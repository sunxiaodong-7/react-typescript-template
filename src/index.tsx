import * as React from 'react'
import * as ReactDOM from 'react-dom'

let a = 1;
let b = 2;
if(true) {
  console.log('111')
}

let root = document.getElementById("root");

let element = <h1 className="title">hello world</h1>

ReactDOM.render(element, root)
