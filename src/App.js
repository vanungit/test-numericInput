import React from 'react';
import './App.css';
import NumericInput from "./components/NumericInput"

function App() {
  return (
    <div className="App">
      <NumericInput min={-30} max={30}/>
    </div>
  );
}

export default App;
