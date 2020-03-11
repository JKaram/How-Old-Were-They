import React from "react";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin: 20px auto;
  height: 250px;

  background-image: url(${props => props.img});
  background-size: cover;

  border: 5px solid #00adb5;
  
  &:hover {
    border: 5px solid rgba(255,255,255); 
  }
  cursor: pointer;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding: 2px 5px;

  background-color: #393e46;
  color: #eeeeee;
  font-weight: bold;
`;

const Info = styled.div`
  color: #eeeeee;
`;

export default function Actor({ name, img, onClick, actorBirthday }) {
  return (
    <Wrapper onClick={onClick} img={img}>
      <Footer>
        <Info>{name}</Info>
        <Info>{moment().diff(actorBirthday, "years")}</Info>
      </Footer>
    </Wrapper>
  );
}
