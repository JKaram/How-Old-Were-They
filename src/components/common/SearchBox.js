import React from "react";
import styled from "styled-components";

const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 80%;
  border-radius: 3px;
  font-size: 1.5em;
  box-sizing: border-box;
  height: 3rem;
  margin: 0 auto;
  display: block;
  padding: 2px 15px;
`;

const ClearButton = styled.button``;

export function SearchBox({
  text,
  setText,
  debouncedSearch,
  setResults,
  setMessage,
}) {
  return (
    <SearchBoxWrapper>
      <SearchInput
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
      <ClearButton
        onClick={() => {
          setResults([]);
          setText("");
          setMessage(
            "Hello! Please search for an actor and find out how old they were when they filmed thier movies."
          );
        }}
      >
        Clear
      </ClearButton>
    </SearchBoxWrapper>
  );
}
