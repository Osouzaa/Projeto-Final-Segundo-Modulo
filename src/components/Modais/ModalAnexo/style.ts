import styled from 'styled-components'

const Container = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -105%);

  background: #ffffff;
  width: 642px;
  height: 516px;
  border-radius: 8px;
  padding: 0 2em;

  &.expanded {
    display: block;
  }
  @media (min-width: 1920px) {
    transform: translate(-50%, -150%);
  }
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

const InputTitle = styled.input`
  width: 380px;
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
  margin-bottom: 1em;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
    margin-bottom: 8px;
  }
`

const InputTextArea = styled.textarea`
  width: 578px;
  height: 153px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding: 10px;
  resize: none;
  outline: none;
`

const InputFile = styled.input`
  display: none;
`

const ContentLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f80ed;
  border-radius: 8px;
  cursor: pointer;

  margin: 0.4em 0;
  width: 135px;
  height: 34px;

  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
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
  InputTitle,
  ContainerTextArea,
  InputTextArea,
  ContentLabel,
  Modal,
  InputFile
}
