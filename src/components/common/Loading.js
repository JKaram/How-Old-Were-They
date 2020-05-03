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
  height: 100px;
  animation: ${rotation} 1s linear infinite;
`;

export { Loading };
