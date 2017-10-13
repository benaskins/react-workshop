import React from 'react'
import styled from 'styled-components'

const BottomSection = styled.div`
  background: moccasin;
  height: 100vh;
`


const InputField = 'div'
const SubmitButton = 'div'

const ChatInput = () => (
  <BottomSection>
    <InputField>
      <input type="text"/>
    </InputField>
    <SubmitButton>
      <button type="submit"/>
    </SubmitButton>
  </BottomSection>
)

export default ChatInput
