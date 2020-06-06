import React from 'react';
import logo from './logo.svg';
import './App.css';
import City from './City'

function App({name, age}) {
  return <div>
    Hello World from {name}. And I am {age + 2} years old
    <br/>
    <City city="Karachi"></City>
    </div>
}

// This method is also correct but the above function has less code.

// function App(props) {
//   return <div>
//     Hello World from {props.username}. And I am {props.age + 2} years old
//     </div>
// }

export default App;
