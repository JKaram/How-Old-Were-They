import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2px 0;

  background-color: rgb(56, 58, 89);
  color: #eeeeee;
  font-weight: bold;

  .name {
    font-size: 100%;
  }
`;

const Information = styled.div`
  font-size: 1em;
  margin: 2px auto;
  color: #eeeeee;
  .rose {
    margin-left: 5px;
  }
`;

export function Info({ name, age, deathday }) {
  return (
    <Footer>
      <Information className="name">{name}</Information>
      <Information>
        {deathday ? (
          <>
            {age} years old (Deceased)
            <span role="img" aria-label="Rose" className="rose">
              🌹
            </span>
          </>
        ) : (
          `${age} years old`
        )}
      </Information>
    </Footer>
  );
}
