import S from './style'
import CardSessao from '../ComponentsSessao'
import FatoRelevante from '../CardFatoRelevante'
import CardAnexo from '../CardAnexo'
import CardAvaliação from '../CardAvaliação'

const Sections = () => {
  return (
    <>
      <S.Container>
        <CardSessao />
        <FatoRelevante />
        <CardAvaliação />
        <CardAnexo />
      </S.Container>
    </>
  )
}

export default Sections
