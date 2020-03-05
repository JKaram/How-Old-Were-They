import React from "react";
import styled from "styled-components";

import Movie from "./movie";

const Wrapper = styled.div`
  display: flex;
`;

export default function MovieList({ list }) {
  return (
    <Wrapper>
      {list.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            backdrop_path={movie.backdrop_path}
          />
        );
      })}
    </Wrapper>
  );
}
