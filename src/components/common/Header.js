import React from "react";
import styled from "styled-components";
import { Title } from "components/common";
import github from "images/github-logo.png";
import insta from "images/insta-logo.png";

const Wrapper = styled.header`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 6px solid ${(p) => p.theme.comment};
  background: rgb(56, 58, 89);

  .links a {
  }
`;

export function Header() {
  return (
    <Wrapper>
      <div></div>
      <Title>How Old Were They?</Title>
      <div className="links">
        <a
          href="https://github.com/JKaram/actor-ages"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github logo" height="50px" />
        </a>
        <a
          href="https://www.instagram.com/jamie_karam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="instagram logo" height="50px" />
        </a>
      </div>
    </Wrapper>
  );
}
