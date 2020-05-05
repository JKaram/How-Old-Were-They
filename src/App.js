import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import DefaultTheme from "themes/default";

import { getActors, RandomFace } from "utils/index";

import {
  PageLayout,
  Loading,
  Face,
  Message,
  SearchBox,
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
  // const [text, setText] = useState("");
  // const [results, setResults] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState(
  //   <>
  //     Hello!
  //     <br />
  //     Please search for an actor and find out how old they were when they filmed
  //     their movies.
  //   </>
  // );

  const [state, setState] = useState({
    text: "",
    results: [],
    loading: false,
    message: "Hey",
  });

  const { text, results, loading, message } = state;

  const search = async (text) => {
    if (text === "")
      return setState((prevState) => ({
        ...prevState,
        results: [],
      }));

    setState((prevState) => ({
      ...prevState,
      loading: true,
      message: "Searching",
    }));

    // setMessage("Searching ...");

    const actors = await getActors(text);
    setState((prevState) => ({
      ...prevState,
      results: actors,
    }));

    setTimeout(function () {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        message: "Done",
      }));
    }, 2000);
  };

  const debouncedSearch = useCallback(
    debounce((text) => search(text), 500),
    []
  );

  const updateText = (text) => {
    setState((prevState) => ({ ...prevState, text }));
  };

  const clearResults = () => {
    setState((prevState) => ({ ...prevState, results: [] }));
  };

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <PageLayout>
        <SearchBox
          text={text}
          updateText={updateText}
          debouncedSearch={debouncedSearch}
          clearResults={clearResults}
        />
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
