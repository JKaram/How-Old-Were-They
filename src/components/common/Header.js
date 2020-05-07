import React from "react";
import styled from "styled-components";
import { Headline } from "components/common";
import github from "images/github-logo.png";
import insta from "images/insta-logo.png";

const Wrapper = styled.header`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 6px solid ${(p) => p.theme.comment};
  background: rgb(56, 58, 89);

  .div {
    flex: 1;
  }

  .links {
    text-align: right;
  }

  .logo {
    height: 40px;
    margin: 0 5px;
    @media (max-width: 670px) {
      height: 30px;
    }
  }

  .empty {
    @media (max-width: 670px) {
      display: none;
    }
  }
`;

export function Header() {
  return (
    <Wrapper>
      <div className="empty div"></div>
      <Headline />
      <div className="links div">
        <a
          href="https://github.com/JKaram/actor-ages"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github logo" className="logo" />
        </a>
        <a
          href="https://www.instagram.com/jamie_karam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="instagram logo" className="logo" />
        </a>
      </div>
    </Wrapper>
  );
}
