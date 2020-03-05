import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { debounce } from 'lodash'
import styled from 'styled-components'

import ActorProfile from './components/actorProfile'
import SearchBox from './components/searchBox'

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
`

function App() {

  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  

  const search = () => {
    axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`)
      .then(function (response) {
        setResults(response.data.results.filter(actor => actor.known_for_department === 'Acting' && actor.popularity > 5))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  const debouncedSearch = debounce(search, 500);

  return (

    <Wrapper>
    
      <SearchBox
        text={text}
        setText={setText}
        debouncedSearch={debouncedSearch}
      />
    

      
        {
          results.slice(0, 5).map(actor => {
            return (
              <ActorProfile
                key={actor.name}
                name={actor.name}
                img={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              />
            )
          })
        }


    
    </Wrapper>
  );
}

export default App;
