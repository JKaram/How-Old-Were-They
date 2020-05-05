import styled from "styled-components";

const Message = styled.div`
  width: 300px;
  margin: 5% auto 0;
  border: 4px solid #00bfb6;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #00bfb6;
  font-family: arial;
  border-radius: 100px;
  position: relative;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #00bfb6;
    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -23px;
  }

  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -18px;
  }
`;

export { Message };
