import React, { useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import DefaultTheme from "themes/default";

import { RandomFace } from "utils/index";

import {
  PageLayout,
  Loading,
  Face,
  Message,
  SearchResults,
} from "components/common/index";

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
    <>
      Hello!
      <br />
      Please search for an actor and find out how old they were when they filmed
      thier movies.
    </>
  );

  const search = async (text) => {
    if (text === "") return setResults([]);
    setLoading(true);
    setMessage("Searching ...");
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
            "Hello!  \n Please search for an actor and find out how old they were when they filmed thier movies."
          )
        : setMessage("Hmm No Results");
    }, 2000);
  };

  const debouncedSearch = useCallback(debounce(search, 1000), [search]);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <PageLayout
        text={text}
        setText={setText}
        debouncedSearch={debouncedSearch}
        setResults={setResults}
        setMessage={setMessage}
      >
        {!loading && !results.length ? (
          <>
            <Message>{message}</Message>
            <Face src={RandomFace} />
          </>
        ) : loading ? (
          <>
            <Message>{message}</Message>
            <Loading src={RandomFace} />
          </>
        ) : (
          <SearchResults results={results} />
        )}
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
