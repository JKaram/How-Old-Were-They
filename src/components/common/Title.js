import styled from "styled-components";
import React from "react";
import logo from "images/logo.svg";

const Wrapper = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Lobster", cursive;
  font-size: 3rem;
  color: ${(p) => p.theme.pink};

  &:before {
    content: "How Old Were They";
  }

  @media (max-width: 670px) {
    font-size: 2em;
  }

  @media (max-width: 412px) {
    &:before {
      content: "H O W T";
    }
  }

  @media (max-width: 266px) {
    &:before {
      content: "";
    }
  }
`;

const Logo = styled.img`
  margin-left: 15px;
  height: 2.5em;
  fill: ${(p) => p.theme.yellow};
`;

export function Headline() {
  return (
    <Wrapper>
      <Title />
      <Logo src={logo} className="App-logo" alt="logo" />
    </Wrapper>
  );
}
