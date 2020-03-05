import React, { useState } from "react";
import styled from "styled-components";

import Actor from "./actor";
import MovieList from "./movieList";

const Wrapper = styled.div`
  display: flex;
`;

export default function ActorProfile({ name, img, list }) {
  const [showList, setShowList] = useState(false);

  return (
    <Wrapper>
      <Actor name={name} img={img} onClick={() => setShowList(!showList)} />

      {showList && <MovieList list={list} />}
    </Wrapper>
  );
}
