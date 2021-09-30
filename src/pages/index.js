import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import GlobalStyle from '../styles/global' 
import * as M from '../styles/main2'

export default function App() {
  return (
    <M.Background>
        <GlobalStyle />
        <Header />
        <M.Main2>
          <M.Info>Seja Bem vindo ao Mundo do Harry</M.Info>
        </M.Main2>
        <Footer />
    </M.Background>
  )
}