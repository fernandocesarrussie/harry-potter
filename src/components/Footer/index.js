import React from "react"
import harry from '../../images/harry2.png'
import * as F from './style'

export function Footer(){
    return (
        <F.Background>
            <F.Container>
                <div>
                    <F.Img src={harry}/>
                </div>
                <div>
                    <F.About href="https://harrypotter.fandom.com/pt-br/wiki/Página_Principal" target="_blank">Mais sobre</F.About>
                </div>
            </F.Container>
        </F.Background>
    )
}