import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash'


function App() {

  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  const search = (text) => {
    setText(text)
    axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`)
      .then(function (response) {
        setResults(response.data.results.filter(actor => actor.known_for_department === 'Acting'))
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(results)

  return (

    <div className="App">
      <header className="App-header">

        <input
          id="text"
          maxLength="50"
          value={text}
          placeholder="Enter your parlay Name"
          onChange={v =>
            search(v.target.value)
          }
        />


        {
          results.slice(0, 5).map(actor => {
            return (
              <>
                <p>{actor.name}</p>
                <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} height='100px' width="auto" />
              </>
            )
          })
        }


      </header>
    </div>
  );
}

export default App;
