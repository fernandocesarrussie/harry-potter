import React from "react"
import * as H from './style'
import logo from "../../images/logo2.png"
import { Link } from 'gatsby'
import styled from "styled-components";

const StyledLink = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Ephesis&display=swap');

    font-family: 'Ephesis', cursive;
    color: #ffe65b;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
`
export function Header(){

    return (
        <H.Caixa>
            <H.Container>
            <H.Logo src={logo}/>
            {/* <Link to="/"><S.Title>Harry Poter</S.Title></Link> */}
            <H.Menu>
            <StyledLink to="/">Início</StyledLink>
            <StyledLink to="/Sobre">Sobre</StyledLink>
            <StyledLink to="/">História</StyledLink>
            <StyledLink to="/">Sobre</StyledLink>
            </H.Menu>
            </H.Container>
        </H.Caixa>
    )
}