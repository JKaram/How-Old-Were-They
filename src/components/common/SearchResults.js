import React from "react";
import styled from "styled-components";
import { ActorProfile } from "./index";
import { getActorInfo } from "utils/index";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export function SearchResults({ results }) {
  return (
    <Wrapper>
      {results.map((actor) => {
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
    </Wrapper>
  );
}
