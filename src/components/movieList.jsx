import React from "react";
import styled from "styled-components";
import moment from "moment";

import Movie from "./movie";

const Wrapper = styled.div`
  display: flex;
`;

export default function MovieList({ list, actorBirthday }) {
  return (
    <Wrapper>
      {list.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            backdrop_path={movie.backdrop_path}
            release_date={movie.release_date}
            actorBirthday={actorBirthday}
          />
        );
      })}
    </Wrapper>
  );
}
