import React from "react";
import styled from "styled-components";
import moment from "moment";

import Info from "../partials/info";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  margin: 5px auto;
  max-width: 200px;
  width: 100%;
  border: 2px solid rgba(0,0,0);
`;

export default function Movie({
  title,
  release_date,
  poster_path,
  actorBirthday
}) {
  return (
    <Wrapper>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        height="300px"
        width="200px"
      />
      <Info
        name={title}
        age={moment(release_date).diff(actorBirthday, "years")}
      />
    </Wrapper>
  );
}
