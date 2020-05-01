import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  color: rgba(189, 147, 249);
  text-align: center;
  padding: 10px;
  border: 1px solid #fff;
  font-family: "Permanent Marker", cursive;
`;

export function MainTitle() {
  return <Title>HOW OLD WERE THEY?</Title>;
}
