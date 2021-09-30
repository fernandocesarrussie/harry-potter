import styled from "styled-components";
import fundo from "../images/fundo.gif";

export const Background = styled.div`
    min-height: 100vh;
    background-image: url(${fundo});
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: cover;
`
export const Main2 = styled.div`
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Info = styled.h1`
    font-size: 85px;
    color:white;
`
export const ContainerCard = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    row-gap: 40px;
`
export const CardFilm = styled.div`
    width: 30vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    background: rgba(158,138,188,0.10);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`
export const ImgFilm = styled.img`
    width: 250px;
    margin: 5px;
`
export const TitleFilm = styled.h2`
    width: 300px;
    text-align: center;
    color: white;
    font-size: 25px;
`