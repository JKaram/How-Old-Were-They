import React from "react";
import styled from "styled-components";
import { Title } from "components/common";

const Wrapper = styled.header`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 6px solid ${(p) => p.theme.comment};
  background: rgb(56, 58, 89);
`;

export function Header() {
  return (
    <Wrapper>
      <Title>How Old Were They?</Title>
    </Wrapper>
  );
}