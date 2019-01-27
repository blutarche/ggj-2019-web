/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

import { COLOR_1 } from 'theme'

import './App.css'
import Home from './Home'
import Tutorial from './Tutorial'
import Credits from './Credits'

const Container = styled.div`
  font-family: 'Amatic SC', cursive;
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

const AdvancedTroubleShooter = () => {
  const [showGame, setShowGame] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  function play() {
    setShowGame(true)
    global.UnityLoader.instantiate(
      'gameContainer',
      'game/Build/ggj19-01.json',
      { onProgress: global.UnityProgress }
    )
  }
  return (
    <Container>
      <div hidden={!showGame}>
        <GameContainer id="gameContainer" />
      </div>
      {!showGame &&
        (showTutorial ? (
          <Tutorial
            onBack={() => setShowTutorial(false)}
            onPlay={() => play()}
          />
        ) : (
          <Home
            onPlay={() => play()}
            onTutorial={() => setShowTutorial(true)}
          />
        ))}
      {!showGame && <Credits />}
    </Container>
  )
}

export default AdvancedTroubleShooter
