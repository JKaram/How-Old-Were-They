import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export default function Movie({ title, backdrop_path }) {

  return (
    <Wrapper>
      <div>{title}</div>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title}
        height="100px"
        width="auto"
      />
    </Wrapper>
  );
}
