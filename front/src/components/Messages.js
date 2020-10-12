import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const MessageDiv = styled.div`
  // Make it easy to visually differentiate messages
  padding-bottom: 7px;
  overflow: scroll;
  min-height: min-content;
  height: 100%;
`

const Message = (props) => {
  return (
    <MessageDiv>
      {/* IMPORTANT SPACE --> */}
      <b>&lt;{props.message.sender}&gt;</b> <span>{props.message.content}</span>
    </MessageDiv>
  )
}

const MessagesDiv = styled.div`
  flex-basis: 100%;
  height: 100%;
  padding: 1rem;
  overflow: hidden;
  min-height: min-content;
  color: ${colors.layer1Foreground};
  // Copied from default React index.css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

const Messages = (props) => {
  return (
    <MessagesDiv>
      {
        props.messages.map((message, index) => <Message key={index} message={ message }/>)
      }
    </MessagesDiv>
  )
}

export default Messages
