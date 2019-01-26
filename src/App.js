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
const Title = styled.div`
  font-size: 4rem;
  font-family: 'Amatic SC', cursive;
`

const App = () => {
  return (
    <Container>
      <Title>Old Man Tea Party</Title>
    </Container>
  )
}

export default App
