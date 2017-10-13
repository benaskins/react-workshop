import React from 'react'

const MessageEntry = 'div'
const Avatar = 'div'
const MessageText = 'div'
const Screen = 'div'
const ChatWindow = 'div'
const ChatInput = 'div'

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
