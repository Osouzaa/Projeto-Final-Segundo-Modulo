import styled from 'styled-components'

const ContentModal = styled.div`
  position: absolute;
  left: 73%;
  top: 125%;
  z-index: 1;
  width: 220px;
  height: 290px;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px 0px 8px 8px;
 
  @media (min-width: 1920px) {
    left: 83%;
  }

  p {
    width: 100%;
    height: 58px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #424242;
    padding: 1em;

    :hover {
      background: #c5f2e0;
    }
    &.selected {
      background: #c5f2e0;
      color: #00995d;
      font-weight: 700;
      font-size: 16px;
    }
  }
`

const Select = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  p {
    color: #000;

    &.Selects {
      color: red;
    }
  }
`

export default {
  ContentModal,
  Select
}
