import React, {useState, useEffect} from 'react'
import * as S from './style'
import {api} from '../../services/api'

export function Main(){
    const [list,setList] = useState([])

    useEffect(() =>{
        api.get()
        .then(response => setList(response.data))
      }, [])
    return (
        <S.Container>
            {list.map((item, index) => (
                <S.BoxProfile>
                    <S.Nome key={index}> {item.name}</S.Nome>
                    <S.Box>
                    <S.Img style={{width: "200px", height: "280px"}} src={item.image} alt="Perfil do Personagem"/>
                    <S.BoxText>
                    <div>
                    <p>Data de Nascimento: {item.dateOfBirth}</p>
                    <p>Casa: {item.house}</p>
                    </div>
                    </S.BoxText>
                    </S.Box>
                    {console.log(item)}
                </S.BoxProfile>
            ))}
        </S.Container>
    )
}