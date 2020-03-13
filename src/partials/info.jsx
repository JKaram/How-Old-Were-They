import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding: 5px 2px;

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
