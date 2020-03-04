import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import _ from 'lodash'


function App() {

  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  function handleSetText(text) {
    _.debounce(setText(text), 2000)
  }


  axios.get(`https://api.themoviedb.org/3/search/person?api_key=a405299a0939a3be4b4586ea1f4363e3&language=en-US&query=${text}&page=1&include_adult=false`)
    .then(function (response) {
     console.log(response.data.results)
      
    })
    .catch(function (error) {
      console.log(error);
    });



  return (
   
    <div className="App">
      <header className="App-header">

        <input
          id="text"
          maxLength="50"
          value={text}
          placeholder="Enter your parlay Name"
          onChange={v => handleSetText(v.target.value)}
        />
        {text}
     

      </header>
    </div>
  );
}

export default App;
