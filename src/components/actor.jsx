import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export default function Actor({ name, img }) {
  return (
    <Wrapper>
      {name}
      <img src={img} alt={name} width="100px" height="auto" />
    </Wrapper>
  );
}