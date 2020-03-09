import React, { useState } from "react";
import styled from "styled-components";

import Actor from "./actor";
import MovieList from "./movieList";

const Wrapper = styled.div`
  display: flex;
`;

export default function ActorProfile({ name, img, list, id, getAge }) {
  const [showList, setShowList] = useState(false);
  const [age, setAge] = useState(0);


   getAge(id).then(val => setAge(val));
  

  return (
    <Wrapper>
      <Actor
        id={id}
        name={name}
        img={img}
        onClick={() => {
          setShowList(!showList);
        }}
        age={age}
      />
      {showList && <MovieList list={list} />}
    </Wrapper>
  );
}
