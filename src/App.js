import React, { useState } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Leo from "images/leo-face.png";

import {
  PageLayout,
  ActorProfile,
  SearchBox,
  Loading,
} from "components/common/index";

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// const StyledLink = styled(Link)`
//   padding: 4px 8px;
//   display: block;
//   text-align: center;
//   box-sizing: border-box;
//   margin: auto 0;
//   color: ${(p) => p.theme.bodyFontColor};
//   font-weight: ${(p) => (p.isActive ? "bold" : "")};
// `;

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
  const [loading, setLoading] = useState(false);

  const search = async (text) => {
    setLoading(true);
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageLayout>
        <SearchBox
          id="text"
          value={text}
          autoComplete="off"
          maxLength="50"
          placeholder="Enter Actor Name"
          onChange={(event) => {
            setText(event.target.value);
            debouncedSearch(event.target.value);
          }}
        />
        {loading ? (
          <Loading src={Leo} />
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
