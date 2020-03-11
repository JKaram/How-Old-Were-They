import React from "react";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin: 5px 5px;
  height: 250px;

  background-image: url(${props => props.img});
  background-size: cover;

  border: 5px solid #00adb5;
  cursor: pointer;
`;

const Footer = styled.footer`
  display: flex;
  width: 200px;

  background-color: #393e46;
  color: #eeeeee;
  font-weight: bold;
  text-align: center;
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
