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

const Information = styled.div`
  color: #eeeeee;
`;

export function Info({ name, age }) {
  return (
    <Footer>
      <Information>{name}</Information>
      <Information>{age}</Information>
    </Footer>
  );
}
