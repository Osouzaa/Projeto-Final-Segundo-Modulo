import { useEffect, useState } from 'react'
import AnotaçõesPessoais from '../Modais/AnotaçõesPessoais'
import S from './style'
import Cards from '@/utils/Card'


const Demands = () => {
  const [openSessao, setOpenSessao] = useState(false)
  return (
    <div>
      {Cards.map(Card => (
        <div key={Card.id}>
          <S.Container>
            <S.TitleIcons>
              <h3>{Card.title}</h3>
              <img src={Card.imagem} alt="" onClick={Card.id === 2 ? () => setOpenSessao(true) : undefined} />
            </S.TitleIcons>
            <S.ContentP>
              <p>{Card.text}</p>
            </S.ContentP>
          </S.Container>
        </div>
      ))}
      <AnotaçõesPessoais open={openSessao} setOpen={setOpenSessao} />
    </div>
  )
}

export default Demands
