/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

import Troubleshooter from './Troubleshooter'
import LightsOff from './LightsOff'
import Music from './Music'
import Panic from './Panic'
import PM25 from './PM25'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${p => (p.lightsOn ? '#f1f3f6' : '#222222')};
`
const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  ${p =>
    p.lightsOn
      ? `
  color: #000;
  `
      : `
  color: #fff;
  `};
`
const Content = styled.div``
const Row = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  display: flex;
`
const Col = styled.div`
  flex: 1;
  width: 240px;
  height: 240px;
  margin: 16px;
`

const App = () => {
  const [showTroubleShooter, setShowTroubleShooter] = useState(false)
  const [lightsOn, setLightsOn] = useState(true)
  const [count, setCount] = useState(0)

  if (showTroubleShooter) return <Troubleshooter />
  const action = () => {
    setCount(count + 1)
    console.log('>>> count', count)
    if (count + 1 > 4) {
      const rand = Math.random()
      console.log('>>> rand', rand)
      if (rand > 0.5) {
        setShowTroubleShooter(true)
        return false
      }
    }
    return true
  }
  return (
    <Container lightsOn={lightsOn}>
      <Title lightsOn={lightsOn}>Super Smart Home Ultimate 2019</Title>
      <Content>
        <Row>
          <Col>
            <LightsOff on={lightsOn} setOn={setLightsOn} action={action} />
          </Col>
          <Col>
            <Music action={action} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Panic action={action} />
          </Col>
          <Col>
            <PM25 action={action} />
          </Col>
        </Row>
      </Content>
    </Container>
  )
}

export default App
