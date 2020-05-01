import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import ActorProfile from "./components/common/actorProfile";
import SearchBox from "./components/common/searchBox";

import MainTitle from "./components/common/mainTitle";

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
`;

const Loading = styled.div`
  margin: 15% auto;
  color: white;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Kaushan Script'
  }
`;

const theme = {
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f",
  bodyBackgroundColor: "rgba(40, 42, 54)",
  bodyFontColor: "189 147 249",
};

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  console.log(typeof results);

  const search = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&search_type=ngram&language=en-US&query=${text}&page=1&include_adult=false&append_to_response=id`
      )
      .then(function (response) {
        setResults(
          response.data.results.filter(
            (actor) =>
              actor.known_for_department === "Acting" &&
              actor.popularity > 3 &&
              actor.profile_path
          )
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getActorInfo = (actorId) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`
      )
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const debouncedSearch = debounce(search, 500);

  return (
    <ThemeProvider theme={theme}>
      <MainTitle />
      <GlobalStyle />
      <SearchBox
        text={text}
        setText={setText}
        debouncedSearch={debouncedSearch}
      />
      <SearchResults>
        {!results.length && <Loading>No results</Loading>}

        {results.slice(0, 10).map((actor) => {
          return (
            <ActorProfile
              key={actor.id}
              id={actor.id}
              name={actor.name}
              img={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              list={actor.known_for}
              getActorInfo={getActorInfo}
            />
          );
        })}
      </SearchResults>
    </ThemeProvider>
  );
}

export default App;
