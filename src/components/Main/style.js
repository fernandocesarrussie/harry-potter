import styled from "styled-components";
import jornal from "../../images/jornal2.png"
import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
`
export const Container = styled.div`
    margin: auto;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 90%;    
`
export const CardProfile = styled.div`
    width: 440px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #C9B84D;
    margin: 25px;
    padding: 10px;
    border: 10px outset #753b0a;
    background-image: url(${jornal});
`
export const Img = styled.img`
    -webkit-box-shadow: 4px -2px 9px 5px #000000; 
    box-shadow: 4px -2px 9px 5px #000000;   
`
export const NameChar = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: black;
    border: 5px outset #753b0a;
    background: rgba(148,106,45,0.48);
`
export const Data = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 115px;
    height: 95px;
    border: 5px outset #753b0a;
    background-color: rgba(148,106,45,0.70);
    font-size: 19px;
    font-weight: 900;
`
export const Box = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center; 
`
export const BoxText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 30vh;
    font-size: 21px;
    font-weight: 900;
`
