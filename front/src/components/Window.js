import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const titleBarHeight = '30px'

const Titlebar = styled.div`
  height: ${titleBarHeight};
  overflow: hidden;
  background: ${colors.layer2Background};
`

const Content = styled.div`
  overflow: hidden;
  height: calc(100% - ${titleBarHeight});
  background: ${colors.layer1Background};
`

const Window = ({ children }) => {
  return (
    <div>
      <Titlebar/>
      <Content>{children}</Content>
    </div>
  )
}

export default Window
