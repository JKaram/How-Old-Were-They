import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
`;
const Search = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

export function SearchBox({ text, setText, debouncedSearch }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
