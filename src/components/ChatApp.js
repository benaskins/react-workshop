import React from 'react'
import ChatInput from './ChatInput'
import Message from './Message'

const Screen = 'div'
const ChatWindow = 'div'

const ChatApp = () => (
  <Screen>
    <ChatWindow>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </ChatWindow>
    <ChatInput/>
  </Screen>
)

export default ChatApp
