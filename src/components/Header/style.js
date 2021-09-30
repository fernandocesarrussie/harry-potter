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
`
export const Caixa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 23vh;
    background-color: #182a46;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: auto;
`
export const Title = styled.h1`
    font-size: 4rem;
    color: yellow;
    text-align: center;
`
// export const Link = styled`
//   text-decoration: none;
// `
export const Menu = styled.ul`
    list-style-type: none;
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Item = styled.li`
    cursor: pointer;
    font-family: 'Archivo Black', sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    color: white;
`
