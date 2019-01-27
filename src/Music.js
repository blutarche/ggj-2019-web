/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Content = styled.div`
  padding: 16px;
  display: flex;
  height: calc(100% - 36px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  border: 2px solid #eee;
  background-color: #fff;
  position: relative;
  transition: all 0.3s;
  ${p =>
    p.disabled
      ? `cursor: auto;
      pointer-events: none;
      opacity: 0.9;
      `
      : `
  cursor: pointer;&:hover {
    opacity: 0.7;
  }
  `};
`
const Title = styled.div`
  font-size: 1.4rem;
  margin-top: 16px;
`
const Calling = styled.div`
  position: fixed;
  transition: all 0.7s;
  ${p =>
    p.show
      ? `
    opacity: 1;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid #eee;
    background-color: #fff;
    padding: 16px;
    `
      : `
    opacity: 0;
    top: 16px;
    right: -300px;
    `};
`
const NoAnswer = styled.div`
  position: fixed;
  transition: all 0.7s;
  ${p =>
    p.show
      ? `
    opacity: 1;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 6px;
    background-color: #E05145;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    color: #fff;
    padding: 16px;
    `
      : `
    opacity: 0;
    top: 16px;
    right: -300px;
    `};
`

const NAMES = [
  'Mom',
  'Dad',
  'Love ❤️',
  'Mrs. Poppins',
  'Lung Tu',
  'Mr. Pom ⌚️',
  'Prof. Snape'
]

const Comp = ({ action }) => {
  const [on, setOn] = useState(false)
  const [noAnswer, setNoAnswer] = useState(false)
  const [name, setName] = useState(NAMES[0])
  const call = () => {
    if (!action()) return
    setOn(true)
    setName(NAMES[Math.floor(Math.random() * NAMES.length)])
    setTimeout(() => {
      setOn(false)
      setNoAnswer(true)
      setTimeout(() => {
        setNoAnswer(false)
      }, 1600)
    }, 3600)
  }
  return (
    <Container>
      <Content disabled={on} onClick={() => call()}>
        <img
          src="https://img.icons8.com/cotton/128/000000/phonelink-ring.png"
          alt="phone"
        />
        <Title>Call</Title>
      </Content>
      <Calling show={on}>Calling {name}...</Calling>
      <NoAnswer show={noAnswer}>No Answer</NoAnswer>
    </Container>
  )
}

export default Comp
