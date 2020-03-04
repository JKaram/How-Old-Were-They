import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [text, setText] = useState('');





  return (
    <div className="App">
      <header className="App-header">

        <input
          id="text"
          maxLength="50"
          value={text}
          placeholder="Enter your parlay Name"
          onChange={v => setText(v.target.value)}
        />
        {text}
      </header>
    </div>
  );
}

export default App;
