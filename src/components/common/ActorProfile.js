import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Actor, MovieList } from "./index";

const Wrapper = styled.div`
  display: flex;
`;

export function ActorProfile({ name, img, list, id, getActorInfo }) {
  const [showList, setShowList] = useState(false);
  const [actorInfo, setActorInfo] = useState({});

  const toggleModal = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    if (id) {
      getActorInfo(id).then((val) => setActorInfo(val));
    }
  }, [id, getActorInfo]);

  useEffect(() => {
    if (showList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showList]);

  return (
    <Wrapper>
      <Actor
        id={id}
        name={name}
        img={img}
        onClick={() => {
          setShowList(true);
        }}
        actorInfo={actorInfo}
      />

      {showList && (
        <MovieList
          showList={showList}
          toggleModal={toggleModal}
          list={actorInfo.credits.cast}
          actorBirthday={actorInfo.birthday}
        />
      )}
    </Wrapper>
  );
}
