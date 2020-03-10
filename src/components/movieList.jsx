import React from "react";
import styled from "styled-components";

import Movie from "./movie";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MovieList({ list, actorBirthday }) {
  list = list
    .filter(movie =>
      movie.release_date && movie.poster_path && movie.vote_count > 100
        ? movie
        : null
    )
    .sort((a, b) =>
      a.release_date > b.release_date
        ? 1
        : b.release_date > a.release_date
        ? -1
        : 0
    );

  return (
    <Wrapper>
      {list.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            actorBirthday={actorBirthday}
          />
        );
      })}
    </Wrapper>
  );
}
