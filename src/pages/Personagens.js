import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import GlobalStyle from '../styles/global'
import * as M from '../styles/main2'

export default function Personagens() {
    return (
        <M.Background>
            <GlobalStyle />
            <Header />
            <Main />
            <Footer />
        </M.Background>
    )
}