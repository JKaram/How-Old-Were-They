import React from "react";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export default function Movie({ title, release_date, poster_path, actorBirthday }) {

  return (
    <Wrapper>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        height="100px"
        width="auto"
      />
      {moment(release_date).diff(actorBirthday,'years')}
    </Wrapper>
  );
}
