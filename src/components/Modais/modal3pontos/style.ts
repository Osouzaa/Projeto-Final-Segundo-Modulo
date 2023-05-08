import styled from 'styled-components'

interface Props {
  top?: boolean
}



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
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
`

const ContainerGeral = styled.div<Props>`
  position: absolute;
  top: ${props => (props.top ? '3%' : '19%')};
  left: 70%;
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
  Contente,
  ContainerGeral,
  EditarP,
  ExluirP,
  ExportarP,
  ContentItens,
}
