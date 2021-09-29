import React from 'react'
import {Link } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import * as S from './style'

export default function Sobre() {
    return (
        <S.Background>
            <Header />
            <h1>Sobre</h1>
            <p>
                Desafio Cards GATSBY, consumindo API com useEffect
            </p>
            <p>
                Projeto produzido por Fernando Felip, aluno do Vai na Web, modulo 3. Sem fins lucrativos.
            </p>
            <Footer />
        </S.Background>
    )
}
