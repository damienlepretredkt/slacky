import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import MessageList from '../message-list/MessageList'

function ChatComponent(props) {
  return(
    <div>
      <h1>Hello {props.login}</h1>
      {props.discussion.map((chat, index) => {
        return(
          <MessageList
            key={index}
            login={chat.login}
            message={chat.message}
          ></MessageList>
        )
      })}
      <form onSubmit={props.handleSendMessage}>
        <TextField
          id="message"
          label="message"
          value={props.message}
          onChange={props.handleTypingMessage}
          margin="normal"
        />
      <Button type="submit" raised color="primary">Submit</Button>
      </form>
    </div>

  )
}

export default ChatComponent
