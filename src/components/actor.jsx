import React from "react";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;

  background-image: url(${props => props.img});
  background-size: cover;

  cursor: pointer;
`;

const Header = styled.header`
  background-color: rgba(255, 255, 255);
  
  width: 200px;
`;

const Age = styled.div`
  margin: auto;
  display: none;
  font-size: 32px;

  color: rgba(255, 255, 255);

  ${Wrapper}:hover & {
    display: block;
  }
`;

export default function Actor({ name, img, onClick, actorBirthday }) {
  return (
    <Wrapper onClick={onClick} img={img}>
      <Header>{name}</Header>
      <Age>{moment().diff(actorBirthday, "years")}</Age>
    </Wrapper>
  );
}
