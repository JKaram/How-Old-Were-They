import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Info } from "./index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin: 20px auto;
  height: 250px;

  background-image: url(${(props) => props.img});
  background-size: cover;

  border: 5px solid #00adb5;

  &:hover {
    border: 5px solid rgba(255, 255, 255);
  }
  cursor: pointer;
`;

export function Actor({ name, img, onClick, actorBirthday }) {
  return (
    <Wrapper onClick={onClick} img={img}>
      <Info name={name} age={moment().diff(actorBirthday, "years")} />
    </Wrapper>
  );
}
