/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const Container = styled.div`
  padding: 2rem;
`
const Title = styled.div`
  font-size: 3rem;
  text-align: center;
`
const TeamName = styled.div`
  font-size: 1.4rem;
  text-align: center;
`
const Button = styled.div`
  font-size: 4rem;
  text-align: center;
  border: 2px solid #000;
  border-radius: 6px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`

const Home = ({ onPlay, onTutorial }) => {
  return (
    <Container>
      <Title>Internet is Home</Title>
      <TeamName>by Old Man Tea Party</TeamName>
      <div
        css={css`
          margin-top: 16px;
        `}
      >
        <Button onClick={onPlay}>Play</Button>
        <Button
          onClick={onTutorial}
          css={css`
            font-size: 2rem;
          `}
        >
          How to play
        </Button>
      </div>
    </Container>
  )
}

export default Home
