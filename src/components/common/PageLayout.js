import React from "react";
import styled from "styled-components";
import { Header } from "./index";

const Content = styled.main`
  max-width: 800px;
  margin: 30px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
