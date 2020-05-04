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

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(p) => p.theme.background};
    min-height: 100vh;
    margin: 0;
    font-family: 'Kaushan Script'
  }
`;

const theme = {
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f",
  background: "#282a36",
  header: "#383A59",
  green: "#50fa7b",
  purple: "#bd93f9",
  pink: "#ff79c6",
  orange: "#ffb86c",
  red: "#ff5555",
  yellow: "#f1fa8c",
  cyan: "#8be9fd",
};

// Palette	Hex	RGB	HSL	Color Picker Boxes
// Background	#282a36	40 42 54	231° 15% 18%	Background Color
// Current Line	#44475a	68 71 90	232° 14% 31%	Current Line Color
// Selection	#44475a	68 71 90	232° 14% 31%	Selection Color
// Foreground	#f8f8f2	248 248 242	60° 30% 96%	Foreground Color
// Comment	#6272a4	98 114 164	225° 27% 51%	Comment Color
// Cyan	#8be9fd	139 233 253	191° 97% 77%	Cyan Color
// Green	#50fa7b	80 250 123	135° 94% 65%	Green Color
// Orange	#ffb86c	255 184 108	31° 100% 71%	Orange Color
// Pink	#ff79c6	255 121 198	326° 100% 74%	Pink Color
// Purple	#bd93f9	189 147 249	265° 89% 78%	Purple Color
// Red	#ff5555	255 85 85	0° 100% 67%	Red Color
// Yellow	#f1fa8c	241 250 140	65° 92% 76%	Yellow Color

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
