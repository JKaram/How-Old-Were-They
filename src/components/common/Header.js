import React from "react";
import styled from "styled-components";
import { Title } from "components/common";
import github from "images/github-logo.png";

const Wrapper = styled.header`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 6px solid ${(p) => p.theme.comment};
  background: rgb(56, 58, 89);
`;

export function Header() {
  return (
    <Wrapper>
      <div></div>
      <Title>How Old Were They?</Title>
      <a
        href="https://github.com/JKaram/actor-ages"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github logo" height="50px" />
      </a>
    </Wrapper>
  );
}
