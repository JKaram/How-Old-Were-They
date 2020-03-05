import React from "react";
import styled from "styled-components";

const Search = styled.input`
  margin: 0 auto;
`;
export default function SearchBox({ text, setText, debouncedSearch }) {
  return (
    <Search
      id="text"
      value={text}
      autocomplete="off"
      maxLength="50"
      placeholder="Enter Actor Name"
      onChange={event => {
        setText(event.target.value);
        debouncedSearch(event.target.value);
      }}
    />
  );
}
