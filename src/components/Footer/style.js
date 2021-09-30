import styled from "styled-components";

export const Background = styled.div`
    background: rgba(24,42,70,0.25);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`
export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90vw;
    height: 20vh;
    margin: auto;
    font-family: 'Archivo Black', sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    color: white;
`
export const About = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
    
    font-family: 'Architects Daughter', cursive;
    color: #ffe65b;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.5s;
        &:hover{
        text-decoration: underline solid ;}
`
export const Img = styled.img`
    width: 100px;
`
