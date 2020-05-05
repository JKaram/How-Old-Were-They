import React from "react";
import styled from "styled-components";
import { Header, SearchBox } from "./index";

const Content = styled.main`
  max-width: 800px;
  margin: 30px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: "Open Sans";
`;

export function PageLayout({
  children,
  text,
  setText,
  debouncedSearch,
  setResults,
  setMessage,
}) {
  return (
    <>
      <Header />
      <SearchBox
        text={text}
        setText={setText}
        debouncedSearch={debouncedSearch}
        setResults={setResults}
        setMessage={setMessage}
      />
      <Content>{children}</Content>
    </>
  );
}
