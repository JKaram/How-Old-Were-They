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

  const toggleModal = () => {
    setShowList(!showList);
  };

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
          setShowList(true);
        }}
        actorBirthday={actorInfo.birthday}
      />
      {showList && (
        <MovieList
          showList
          toggleModal={toggleModal}
          list={actorInfo.credits.cast}
          actorBirthday={actorInfo.birthday}
        />
      )}
    </Wrapper>
  );
}
