import styled from 'styled-components'

const Container = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -110%);

  background: #ffffff;
  width: 720px;
  height: 506px;
  border-radius: 8px;
  padding: 0 2em;
  overflow-y: auto;

  &.expanded {
    display: block;
    transition: opacity 2s ease;
  }

  @media (min-width: 1920px) {
    transform: translate(-50%, -150%);
  }
`

const Linhaa = styled.div`
  border-top: 1px solid #eeeeee;
  margin-top: 2em;
  width: 100%;
`
const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #00995d;
  }
  img {
    cursor: pointer;
  }
`

const ContentInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`

const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  }

  input {
    outline: none;
  }
`

const DadosGerais = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;
  margin-bottom: 1.5em;
  margin-top: 1em;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #00995d;
    color: #fff;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
`

const InputDate = styled.input`
  ::-webkit-calendar-picker-indicator {
    display: none;
  }
  width: 182px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;

  color: #828282;
  padding: 0 10px;
`

const InputHora = styled.input`
  width: 182;
  height: 48px;
  background: #ffffff;
  padding: 0 0.5em;

  border: 1px solid #bdbdbd;
  border-radius: 8px;
`
const ContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;
  margin-bottom: 2em;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
    margin-bottom: 8px;
  }
`

const InputTextArea = styled.textarea`
  width: 650px;
  height: 153px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding: 10px;
  resize: none;
  outline: none;
`

const InputTitle = styled.input`
  width: 650px;
  height: 48px;
  background: #ffffff;
  padding: 0 0.5em;

  border: 1px solid #bdbdbd;
  border-radius: 8px;
`
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`
export default {
  Container,
  ContentTitle,
  ContentInputs,
  ContainerLabel,
  InputDate,
  InputHora,
  ContainerTextArea,
  InputTextArea,
  DadosGerais,
  InputTitle,
  Linhaa,
  Modal
}
