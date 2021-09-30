import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
`
export const Logo = styled.img`
    width: 25vw;
    height: 12vh;
`
export const Caixa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 25vh;
    margin: auto;
    background: rgba(24,42,70,0.45);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`
export const Menu = styled.ul`
    list-style-type: none;
    width: 40%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

