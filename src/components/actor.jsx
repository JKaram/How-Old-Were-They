import React from "react";
import styled from "styled-components";
import moment from 'moment';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export default function Actor({ name, img, onClick, actorBirthday}) {
  
  return (
    <Wrapper onClick={onClick}>
      {name}
      <img src={img} alt={name} width="100px" height="auto" />
      {moment().diff(actorBirthday, 'years')}
    </Wrapper>
  );
}
