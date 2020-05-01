import React from "react";
import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  font-size: 1em;
  box-sizing: border-box;
  height: 40px;
`;

export function SearchBox({ text, setText, debouncedSearch }) {
  return (
    <Search
      id="text"
      value={text}
      autoComplete="off"
      maxLength="50"
      placeholder="Enter Actor Name"
      onChange={(event) => {
        setText(event.target.value);
        debouncedSearch(event.target.value);
      }}
    />
  );
}
