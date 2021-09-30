import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import GlobalStyle from '../styles/global' 

export default function App() {
  return (
    <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
    </div>
  )
}