import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 200px;
  padding: 5px 0;

  background-color: #393e46;
  color: #eeeeee;
  font-weight: bold;
`;

const Info = styled.div`
  color: #eeeeee;
`;

export default function Actor({ name, age}) {
  return (
    <Footer>
      <Info>{name}</Info>
      <Info>{age}</Info>
    </Footer>
  );
}
