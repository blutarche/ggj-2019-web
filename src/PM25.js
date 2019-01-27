/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

import Dusted from 'assets/dusted.jpeg'

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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${p => (p.show ? `` : `display: none; `)}
`
const Modal = styled.div`
  transition: all 0.3s;
  width: 700px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  img {
    max-width: 100%;
    height: auto;
  }
`
const ModalLabel = styled.div`
  font-size: 1.6rem;
  padding: 16px;
  text-align: center;
`
const Button = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #e05145;
  font-weight: bold;
  color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`

const Comp = ({ action }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <Container
      onClick={() => {
        if (action()) {
          setModalOpen(true)
        }
      }}
    >
      <Content>
        <img
          src="https://img.icons8.com/cotton/128/000000/health-graph.png"
          alt="siren"
        />
        <Title>PM 2.5 Status</Title>
      </Content>
      <ModalContainer show={modalOpen}>
        <Modal>
          <img src={Dusted} alt="dusted" />
          <ModalLabel>This is us in 5 years.</ModalLabel>
          <Button
            onClick={e => {
              e.stopPropagation()
              setModalOpen(false)
            }}
          >
            God damn
          </Button>
        </Modal>
      </ModalContainer>
    </Container>
  )
}

export default Comp
