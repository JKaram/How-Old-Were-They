import styled, { keyframes } from "styled-components";

const rotation = keyframes`
 from {
     transform: rotate(0deg);
 }
 to {
     transform: rotate(360deg);
 }
`;

export const Loading = styled.img`
  margin: 10px auto 0;
  height: 10rem;
  animation: ${rotation} 1s linear infinite;
  display: block;
`;

export const Face = styled.img`
  margin: 10px auto 0;
  height: 10rem;
  display: block;
`;
