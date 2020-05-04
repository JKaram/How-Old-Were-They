import styled, { keyframes } from "styled-components";

const rotation = keyframes`
 from {
     transform: rotate(0deg);
 }
 to {
     transform: rotate(360deg);
 }
`;

const Loading = styled.img`
  margin: 10% auto;
  height: 10rem;
  animation: ${rotation} 1s linear infinite;
  display: block;
`;

export { Loading };
