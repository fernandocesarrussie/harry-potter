import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
`
export const Container = styled.div`
    width: ;
    margin: auto;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: #10141b;
`
export const Img = styled.img`
    -webkit-box-shadow: 4px -2px 9px 5px #000000; 
    box-shadow: 4px -2px 9px 5px #000000;
`
export const Nome = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: white;
`
export const BoxProfile = styled.div`
    width: 400px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #C9B84D;
    margin: 10px;
    padding: 5px;
    border: 10px outset #753b0a;
    border-radius: 10px 10px 10px 10px;
`
export const Box = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`
export const BoxText = styled.div`
    width: 40%;
    font-size: 21px;
    font-weight: 900;
    font-family: cursive;
`
