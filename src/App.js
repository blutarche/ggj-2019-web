import React, { useState } from 'react'
import styled from '@emotion/styled'

import { COLOR_1 } from 'theme'

import './App.css'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_1};
`
const GameContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
const Home = styled.div`
  padding: 2rem;
`
const Title = styled.div`
  font-size: 3rem;
  font-family: 'Amatic SC', cursive;
  text-align: center;
`
const TeamName = styled.div`
  font-size: 1.4rem;
  font-family: 'Amatic SC', cursive;
  text-align: center;
`
const Show = styled.div`
  font-size: 4rem;
  font-family: 'Amatic SC', cursive;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <div hidden={!show}>
        <GameContainer id="gameContainer" />
      </div>
      {!show && (
        <Home>
          <Title>Internet is Home</Title>
          <TeamName>by Old Man Tea Party</TeamName>
          <Show onClick={() => setShow(true)}>Play</Show>
        </Home>
      )}
    </Container>
  )
}

export default App
