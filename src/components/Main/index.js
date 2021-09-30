import React, {useState, useEffect} from 'react'
import * as M from './style'
import {api} from '../../services/api'

export function Main(){
    const [list,setList] = useState([])

    useEffect(() =>{
        api.get()
        .then(response => setList(response.data))
      }, [])
    return (
        <M.Container>
            {list.map((item, index) => (
                <M.CardProfile>
                    <M.NameChar key={index}> {item.name}</M.NameChar>
                    <M.Box>
                    <M.Img style={{width: "200px", height: "280px"}} src={item.image} alt="Perfil do Personagem"/>
                    <M.BoxText>
                    <M.Data>
                    <p>Nascimento: {item.dateOfBirth}</p>
                    <p>Casa: {item.house}</p>
                    </M.Data>
                    </M.BoxText>
                    </M.Box>
                    {console.log(item)}
                </M.CardProfile>
            ))}
        </M.Container>
    )
}