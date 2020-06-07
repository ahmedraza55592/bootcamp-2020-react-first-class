import React from 'react';
import './App.css';

function App(props) {
  return <div>
    <strong>Hello {props.name}!</strong>
    <h2>Scrambled Eggs</h2>
    <p>Here is a recipe for deliciously rish Srambled eggs</p>
    <h3>Ingredients</h3>
    <ul>
      <li>2 eggs</li>
      <li>1 tbs butter</li>
      <li>2 tbs cream</li>
    
    </ul>
    <h3>Method</h3>
    <ol>
      <li>Melt butter in a frying pan over a medium heat</li>
      <li>Gently mix the eggs and cream in a bowl</li>
      <li>Once butter has melted add cream and eggs</li>
      <li>Using a spatula fold the eggs from the edge of the pan to the enter every 20 seconds (as if you are making an omelate)</li>
      <li>When the eggs are still moist remove from the heat(it will continue to cook on the plate until served</li>
    </ol>

      <div className="Addition" >5 + 10 = { 5 + 10}</div>


  </div>
}

// This method is also correct but the above function has less code.

// function App(props) {
//   return <div>
//     Hello World from {props.username}. And I am {props.age + 2} years old
//     </div>
// }

export default App;
