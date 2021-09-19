// if you want to check the functionality of this code PLease copy this code and pate into App.js file 
// other wise it will not work .



import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {



  return (
    <div className="App">
      <Counter ></Counter>
    </div>

);
}

function Counter(){
  let [count , setCount] = useState(50);
  
  const handleIncrease = () => { 

    count = count + 1
    return setCount(count); 
    
  }
  const handleDecrease = () => { 
    count = count - 1
    return setCount(count); 
  }
  
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrease}>Increase</button> 
      <button onClick={handleDecrease}>Decrease</button> 
    </div>
  );
}


export default App;
