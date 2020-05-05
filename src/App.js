import React, { useState } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import DefaultTheme from "themes/default";

import { RandomFace } from "utils/index";

import {
  PageLayout,
  ActorProfile,
  SearchBox,
  Loading,
  Face,
  Message,
} from "components/common/index";

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(p) => p.theme.background};
    min-height: 100vh;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: white;
  }
`;

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    "Hello! Please search for an actor and find out how old they were when they filmed thier movies."
  );

  const search = async (text) => {
    if (text === "") return setResults([]);
    setLoading(true);
    setMessage("1 sec");
    const res = await axios(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&search_type=ngram&language=en-US&query=${text}&page=1&include_adult=false&append_to_response=id`
    );
    const movies = await res.data.results.filter(
      (actor) =>
        actor.known_for_department === "Acting" &&
        actor.popularity > 1 &&
        actor.profile_path
    );
    setResults(movies);

    setTimeout(function () {
      setLoading(false);
      results.length
        ? setMessage(
            "Hello! Please search for an actor and find out how old they were when they filmed thier movies."
          )
        : setMessage("Hmm No Results");
    }, 2000);
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

  const debouncedSearch = debounce(search, 1000);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <PageLayout>
        <SearchBox
          text={text}
          setText={setText}
          debouncedSearch={debouncedSearch}
          setResults={setResults}
          setMessage={setMessage}
        />

        {!loading && !results.length ? (
          <>
            <Message>{message}</Message> <Face src={RandomFace} />
          </>
        ) : (
          <div></div>
        )}
        {loading ? (
          <>
            <Message>{message}</Message>
            <Loading src={RandomFace} />
          </>
        ) : (
          <SearchResults>
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
        )}
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
