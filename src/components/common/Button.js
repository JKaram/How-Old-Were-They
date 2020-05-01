import React from "react";
import styled from "styled-components";

const Close = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  position: fixed;
  cursor: pointer;

  &:hover {
    color: rgb(0, 173, 181);
  }
`;

export function Button({ toggleModal }) {
  return <Close onClick={() => toggleModal()}>X</Close>;
}
