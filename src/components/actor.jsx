import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;

    background:red;
`;

export default function Actor({ name, img, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      {name}
      <img src={img} alt={name} width="100px" height="auto" />
    </Wrapper>
  );
}
