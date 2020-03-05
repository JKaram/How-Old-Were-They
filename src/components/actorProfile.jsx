import React from "react";
import styled from "styled-components";

import Actor from "./actor";
import MovieList from "./movieList";

const Wrapper = styled.div`
  display: flex;
`;

export default function ActorProfile({ name, img, list }) {
  return (
    <Wrapper>
      <Actor name={name} img={img} />

      <MovieList list={list} />
    </Wrapper>
  );
}
