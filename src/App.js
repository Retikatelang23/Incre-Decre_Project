import './App.css';
import React, { useState } from 'react'

function App() {
  // 0 likha because initially value 0 rehegi
  const[count, setCount] = useState(0);

  function decreaseHandler(){
      setCount(count - 1)
  }

  function increaseHandler(){
      setCount(count + 1)
  }

  function resetHandler(){
      setCount(0)
  }

  return (
    <div className="wrapper">
      <div className="heading">Increment & Decrement</div>

      <div className="container">
        <button className="btn-1" onClick={decreaseHandler}>-</button> 

        <div className='inner-div'>{count}</div>
        
        <button className="btn-2" onClick={increaseHandler}>+</button>
      </div>

      <button className='reset-btn' onClick={resetHandler}>Reset</button>
        
    </div>
  );
}

export default App;
