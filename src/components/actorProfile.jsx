import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Actor from "./actor";
import MovieList from "./movieList";

const Wrapper = styled.div`
  display: flex;
`;

export default function ActorProfile({ name, img, list, id, getActorInfo }) {
  const [showList, setShowList] = useState(false);
  const [actorInfo, setActorInfo] = useState({});

  useEffect(() => {
    if (id) {
      getActorInfo(id).then(val => setActorInfo(val));
    }
  }, [id, getActorInfo]);
  
  return (
    <Wrapper>
      <Actor
        id={id}
        name={name}
        img={img}
        onClick={() => {
          setShowList(!showList);
        }}
        actorBirthday={actorInfo.birthday}
      />
      {showList && <MovieList list={actorInfo.credits.cast} actorBirthday={actorInfo.birthday} />}
    </Wrapper>
  );
}
