/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: baseline;
  font-weight: bold;
`
const Names = styled.span`
  font-size: 0.8rem;
  opacity: 0.7;
  margin-right: 16px;
`

const Credits = () => {
  return (
    <Container>
      <Names>
        With love. And blood. And tears. by: Champ, Waii, Por, Tas, Aik.
      </Names>
      <a
        href="https://github.com/blutarche/ggj-2019-web/"
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          margin-right: 16px;
        `}
      >
        Web
      </a>
      <a
        href="https://github.com/LNWPOR/GGJ2019"
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          margin-right: 16px;
        `}
      >
        Game Source Code
      </a>
    </Container>
  )
}

export default Credits
