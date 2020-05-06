import React from "react";
import styled from "styled-components";
import { Info } from "./index";
import { calculateAge } from "utils/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;

  margin: 30px 0;

  border: 5px solid ${(p) => p.theme.header};
  transition: all 0.2s ease-in-out;

  /* &:hover {
  } */

  /* @media (hover: hover) {
    &:hover {
      border: 5px solid ${(p) => p.theme.comment};
      transform: scale(1.1);
    }
  } */
  cursor: pointer;
`;

const ActorImage = styled.img`
  height: 300px;
  width: auto;
  ${(p) => (p.deathday ? "filter: grayscale(100%)" : null)}
`;

export function Actor({ name, img, onClick, actorInfo }) {
  return (
    <Wrapper onClick={onClick}>
      <ActorImage src={img} alt={name} deathday={actorInfo.deathday} />
      <Info
        name={name}
        age={calculateAge(actorInfo.birthday, actorInfo.deathday)}
        deathday={actorInfo.deathday}
      />
    </Wrapper>
  );
}
