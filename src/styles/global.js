import { createGlobalStyle } from "styled-components";
// import fundo from "../images/brilho.gif"
// background-image: url(${fundo});
//     background-origin: border-box;
//     background-repeat: no-repeat;
//     background-size: cover;
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button, li, img, span{
    cursor: pointer;
  }
`;