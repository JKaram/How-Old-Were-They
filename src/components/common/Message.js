import styled from "styled-components";

const Message = styled.p`
  position: relative;
  width: 300px;
  text-align: center;
  line-height: 1.4em;
  margin: 40px auto;
  background-color: #fff;
  border: 8px solid #333;
  border-radius: 30px;
  font-family: sans-serif;
  padding: 20px;
  font-size: large;

  &:after,
  &:before {
    content: "Jamie";
    position: absolute;
    width: 0;
    height: 0;
  }
`;

export { Message };

// p.bubble {
// 	position: relative;
// 	width: 300px;
// 	text-align: center;
// 	line-height: 1.4em;
// 	margin: 40px auto;
// 	background-color: #fff;
// 	border: 8px solid #333;
// 	border-radius: 30px;
// 	font-family: sans-serif;
// 	padding: 20px;
// 	font-size: large;
// }

// p.bubble:before,
// p.bubble:after {

// }

// p.speech:before {
// 	left: 30px;
// 	bottom: -50px;
// 	border: 25px solid;
// 	border-color: #333 transparent transparent #333;
// }

// p.speech:after {
// 	left: 38px;
// 	bottom: -30px;
// 	border: 15px solid;
// 	border-color: #fff transparent transparent #fff;
// }
