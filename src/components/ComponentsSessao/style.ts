import styled from 'styled-components'
interface Props {
  top?: boolean
  left?: boolean
}

const Container = styled.section`
  position: relative;
  width: 100%;

  margin-top: 2em;

  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0px 8px 8px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1em;
  padding-bottom: 1.2em;

  &.green-bg {
    border-left: 3px solid #00995d;
  }

  &.blue-bg {
    border-left: 3px solid #2f80ed;
  }

  &.purple-bg {
    border-left: 3px solid #9d28ac;
  }

  &.pink-bg {
    border-left: 3px solid #ea1e61;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;

    color: #424242;

    @media (min-width: 2560px) {
      font-size: 18px;
    }
    span {
      color: #2f80ed;
      font-weight: 400;
    }
  }
`

const EditCard = styled.div`
  position: absolute;
  right: 1em;
  top: 1.5em;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 4px;
  color: #212121;
  cursor: pointer;
`

const Imagem = styled.div`
  position: relative;
  bottom: 1.3em;
  left: 1em;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  img {
    padding: 0.6em 0.7em;
  }

  &.green-bg {
    background-color: #00995d;
  }

  &.blue-bg {
    background-color: #2f80ed;
  }
  &.purple-bg {
    background-color: #9d28ac;
  }

  &.pink-bg {
    background-color: #ea1e61;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  h4 {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    margin-bottom: 2px;
  }

  p {
    color: #616161;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 15px;
  }
`

const Listra = styled.div`
  position: absolute;
  width: 3px;
  height: 25px;
  top: -40px;
  left: 55px;
  z-index: -1;

  &.green-bg {
    background-color: #00995d;
  }

  &.blue-bg {
    background-color: #2f80ed;
  }
  &.purple-bg {
    background-color: #9d28ac;
  }

  &.pink-bg {
    background-color: #ea1e61;
  }
`

const Contente = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5em 1em;
  gap: 2em;
`
const ContentItens = styled.div`
  display: flex;
  gap: 0.5em;
`

const ContainerGeral = styled.div<Props>`
  position: absolute;
  left: ${props => (props.left ? '77%' : '77%')};
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 2em;
  padding: 1em;

  background: #ffffff;
  width: 170px;
  height: 173px;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px 0px 8px 8px;
  z-index: 1;

  &.top-sessão {
    top: 25%;
  }
  &.top-documents {
    top: 20%;
  }
  &.top-avaliação {
    top: 16%;
  }
  &.top-FatoRelevante {
    top: 37%;
  }

  @media (min-width: 1920px) {
    left: 85%;
    
  &.top-sessão {
    top: 29%;
  }
  }
`

const EditarP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #2f80ed !important;
`
const ExluirP = styled(EditarP)`
  color: #eb5757 !important;
`

const ExportarP = styled(EditarP)`
  color: #00995d !important;
`

export default {
  Container,
  Imagem,
  Content,
  EditCard,
  Listra,
  Contente,
  ContainerGeral,
  EditarP,
  ExluirP,
  ExportarP,
  ContentItens
}
