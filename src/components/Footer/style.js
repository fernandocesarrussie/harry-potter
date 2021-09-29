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
    cursor: pointer;
    font-family: 'Archivo Black', sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #10141b;
`