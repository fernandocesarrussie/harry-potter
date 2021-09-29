import React from "react"
import * as S from './style'
import logo from "../../images/logoHP.png"
import { Link } from 'gatsby'

export function Header(){
    return (
        <S.Caixa>
            <S.Container>
            <img src={logo}/>
            {/* <Link to="/"><S.Title>Harry Poter</S.Title></Link> */}
            <S.Menu>
            <Link to="/"><S.Item>Início</S.Item></Link>
            <Link to="/Personagens"><S.Item>Personagens</S.Item></Link>
            <Link to="/Historia"><S.Item>História</S.Item></Link>
            <Link to="/Sobre"><S.Item>Sobre</S.Item></Link>
            </S.Menu>
            </S.Container>
        </S.Caixa>
    )
}