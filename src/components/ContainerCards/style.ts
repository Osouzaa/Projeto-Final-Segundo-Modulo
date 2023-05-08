import styled from 'styled-components'

const Container = styled.section`
  
  width: 100%;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export default {
  Container
}
