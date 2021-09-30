import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import GlobalStyle from '../styles/global' 
import harry1 from '../images/harry1.jpg'
import harry2 from '../images/harry2.jpg'
import harry3 from '../images/harry3.jpg'
import harry4 from '../images/harry4.jpg'
import harry5 from '../images/harry5.jpg'
import harry6 from '../images/harry6.jpg'
import harry7 from '../images/harry7.jpg'
import harry8 from '../images/harry8.jpg'

import * as M from '../styles/main2'

export default function Filmes() {
    return (
        <M.Background>
            <GlobalStyle />
            <Header />
            <M.Main2>
                <M.ContainerCard>
                    <M.CardFilm>
                        <M.ImgFilm src={harry1}/>
                        <M.TitleFilm>Harry Potter e a Pedra Filosofal (2001)</M.TitleFilm>
                    </M.CardFilm>
                    <M.CardFilm>
                        <M.ImgFilm src={harry2}/>
                        <M.TitleFilm>Harry Potter e a Câmara Secreta (2002)</M.TitleFilm>
                    </M.CardFilm>
                    <M.CardFilm>
                        <M.ImgFilm src={harry3}/>
                        <M.TitleFilm>Harry Potter e o Prisioneiro de Azkaban (2004)</M.TitleFilm>
                    </M.CardFilm>
                    <M.CardFilm>
                        <M.ImgFilm src={harry4}/>
                        <M.TitleFilm>Harry Potter e o Cálice de Fogo (2005)</M.TitleFilm>
                    </M.CardFilm>
                    <M.CardFilm>
                        <M.ImgFilm src={harry5}/>
                        <M.TitleFilm>Harry Potter e a Ordem da Fênix (2007)</M.TitleFilm>
                    </M.CardFilm>
                    <M.CardFilm>
                        <M.ImgFilm src={harry6}/>
                        <M.TitleFilm>Harry Potter e o Enigma do Príncipe (2009)</M.TitleFilm>
                    </M.CardFilm>
                    <M.CardFilm>
                        <M.ImgFilm src={harry7}/>
                        <M.TitleFilm>Harry Potter e as Relíquias da Morte: Parte 1 (2010)</M.TitleFilm>
                    </M.CardFilm>
                    <M.CardFilm>
                        <M.ImgFilm src={harry8}/>
                        <M.TitleFilm>Harry Potter e as Relíquias da Morte: Parte 2 (2011)</M.TitleFilm>
                    </M.CardFilm>
                </M.ContainerCard>
            </M.Main2>
            <Footer />
        </M.Background>
    )
}