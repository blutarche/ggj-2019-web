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
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`
const Title = styled.div`
  font-size: 1.4rem;
  margin-top: 16px;
`
const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: ${p => p.bg};
  color: #fff;
`

const Comp = ({ on, setOn, action }) => {
  return (
    <Container
      onClick={() => {
        if (action()) {
          setOn(!on)
        }
      }}
    >
      <Content>
        <img
          src="https://img.icons8.com/cotton/128/000000/idea.png"
          alt="bulb"
        />
        <Title>Lights</Title>
        {on ? <Tag bg={'#09d768'}>ON</Tag> : <Tag bg={'#E05145'}>OFF</Tag>}
      </Content>
    </Container>
  )
}

export default Comp
