/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  display: inline-flex;
  // font-family: 'Open Sans Condensed', sans-serif;
`
const Back = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  padding: 16px;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`
const Step = styled.div`
  display: inline-flex;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 16px;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  img {
    margin-right: 8px;
  }
`
const Label = styled.div`
  font-size: 1.6rem;
`
const Description = styled.div`
  font-size: 2rem;
`
const Play = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
  img {
    margin-left: 16px;
  }
`

const Navigator = styled.div`
  padding: 8px 12px;
  border: 1px #000 solid;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 20;
  &:hover {
    opacity: 0.5;
  }
`
const Previous = styled(Navigator)`
  position: fixed;
  top: 50%;
  left: 16px;
`
const Next = styled(Navigator)`
  position: fixed;
  top: 50%;
  right: 16px;
`

const Tutorial = ({ onBack, onPlay }) => {
  const [step, setStep] = useState(1)
  return (
    <Container>
      <Back onClick={onBack}>{'<'} Back</Back>
      {step > 1 && (
        <Previous onClick={() => setStep(step - 1)}>
          {'<'}{' '}
          {step === 2
            ? 'Objectives'
            : step === 3
            ? 'Controls'
            : step === 4
            ? 'Beware'
            : null}
        </Previous>
      )}
      <Content>
        {step === 1 ? (
          <Step>
            <Title>Objective</Title>
            <Row>
              <Description>
                Defeat the dinosaur and take back the internet!
              </Description>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/dusk/64/000000/define-location.png"
                alt="shoot"
              />
              <Label>Attack the weakpoints! Destroy all of them to win.</Label>
            </Row>
          </Step>
        ) : step === 2 ? (
          <Step>
            <Title>Controls</Title>
            <Row>
              <img
                src="https://img.icons8.com/dusk/64/000000/circled-left-2.png"
                alt="left"
              />
              <Label>
                <b>[Left button]</b> to roll left
              </Label>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/dusk/64/000000/circled-right-2.png"
                alt="right"
              />
              <Label>
                <b>[Right button]</b> to roll right
              </Label>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/dusk/64/000000/double-up.png"
                alt="jump"
              />
              <Label>
                <b>[Spacebar]</b> to jump
              </Label>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/dusk/64/000000/define-location.png"
                alt="shoot"
              />
              <Label>Shoots automatically</Label>
            </Row>
          </Step>
        ) : step === 3 ? (
          <Step>
            <Title>Beware</Title>
            <Row>
              <Description>
                You will die within 60 seconds ...not really.
              </Description>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/dusk/64/000000/processor.png"
                alt="shoot"
              />
              <Label>
                If you have at least one part your life won't go down.
              </Label>
            </Row>
            <Row>
              <img
                src="https://img.icons8.com/dusk/64/000000/timer.png"
                alt="shoot"
              />
              <Label>
                Parts last for 60 seconds. Find new one and defeat the boss
                quickly!
              </Label>
            </Row>
          </Step>
        ) : step === 4 ? (
          <Step>
            <Play onClick={onPlay}>
              <img
                src="https://img.icons8.com/wired/64/000000/play.png"
                alt="play"
              />
            </Play>
          </Step>
        ) : null}
      </Content>
      {step < 4 && (
        <Next onClick={() => setStep(step + 1)}>
          {step === 1
            ? 'Controls'
            : step === 2
            ? 'Beware'
            : step === 3
            ? 'Play'
            : null}{' '}
          {'>'}
        </Next>
      )}
    </Container>
  )
}

export default Tutorial
