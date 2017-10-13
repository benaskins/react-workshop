import React from 'react'
import styled from 'styled-components'

const MessageEntry = 'div'
const Avatar = 'div'

const MessageText = styled.div`
  background: pink;
`

const Message = () => (
  <MessageEntry>
    <Avatar/>
    <MessageText>
      <div>Line one</div>
      <div>Line two</div>
      <div>Line three</div>
    </MessageText>
  </MessageEntry>
)

export default Message

