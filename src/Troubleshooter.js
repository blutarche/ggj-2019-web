/** @jsx jsx */
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

import DinoImageSrc from 'assets/dino.png'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  ul {
    li {
      margin-bottom: 4px;
    }
  }
`
const Dino = styled.img`
  width: 48px;
  height: auto;
`
const GameContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
const Link = styled.div`
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.6;
  }
`

const TroubleShooter = () => {
  const [loaded, setLoaded] = useState(false)
  const [advanced, setAdvanced] = useState(false)

  function play() {
    setAdvanced(true)
    global.UnityLoader.instantiate(
      'gameContainer',
      'game/Build/ggj19-build.json',
      {
        onProgress: global.UnityProgress
      }
    )
  }

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1600)
  }, [])

  if (!loaded) {
    return <Container />
  }

  return (
    <Container>
      <div hidden={!advanced}>
        <GameContainer id="gameContainer" />
      </div>
      {!advanced && (
        <Content>
          <Dino src={DinoImageSrc} alt="dino" />
          <h2>No Internet</h2>
          <span>Try:</span>
          <ul>
            <li>Checking the network cables, modem, and router</li>
            <li>Reconnecting to Wi-Fi</li>
            <li>Call your ISP and get no help whatsoever</li>
            <li>Lay down, try not to cry, cry a lot</li>
            <li>Pray to the lord and savior</li>
          </ul>
          <Link onClick={() => play()}>
            Or try super advanced troubleshooter
          </Link>
        </Content>
      )}
    </Container>
  )
}

export default TroubleShooter
