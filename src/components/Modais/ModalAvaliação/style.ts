import styled from 'styled-components'

const Container = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -120%);

  background: #ffffff;
  width: 642px;
  height: 466px;
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
const ContainerAtencao = styled.div`
  margin-top: 2.5em;
  width: 578px;
  height: 122px;
  background: #c5f2e0;
  border-radius: 8px;

  padding: 1em;
  margin-bottom: 2em;
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #00995d;
    margin-bottom: .5em;
  }

  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;

    em {
      font-weight: 500;
    }
  }
`
const ContainerFooter = styled.div`
  margin-top: .5em;
  position: fixed;
  left: 0%;
  border-top: 2px solid #e0e0e0;
  width: 100%;
  height: 18%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  }
`


const ContainerButtons = styled.div`
  width: 45%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 147px;
    height: 48px;
    color: #fff;
    background: #00995d;
    border-radius: 24px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #616161;
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
  ContainerAtencao,
  ContainerButtons,
  ContainerFooter,
  Modal
}
