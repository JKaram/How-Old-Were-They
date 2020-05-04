import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Info } from "./index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;

  margin: 30px 0;

  border: 5px solid ${(p) => p.theme.header};

  &:hover {
    border: 5px solid ${(p) => p.theme.pink};
  }
  cursor: pointer;

  > img {
    height: 300px;
    width: auto;
  }
`;

export function Actor({ name, img, onClick, actorBirthday }) {
  return (
    <Wrapper onClick={onClick}>
      <img src={img} alt={name} />
      <Info name={name} age={moment().diff(actorBirthday, "years")} />
    </Wrapper>
  );
}
