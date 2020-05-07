import styled from "styled-components";
import React from "react";
import logo from "images/logo.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Lobster", cursive;
  font-size: 3rem;
  color: ${(p) => p.theme.pink};
`;

const Logo = styled.img`
  margin-left: 5px;
  height: 3em;
  fill: ${(p) => p.theme.yellow};
`;

export function Headline() {
  return (
    <Wrapper>
      <Title>How Old Were They</Title>
      <Logo src={logo} className="App-logo" alt="logo" />
    </Wrapper>
  );
}
