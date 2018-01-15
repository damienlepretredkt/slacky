import React from 'react'


function MessageList(props) {
  return(
    <div>
      <span>{props.login} says :</span>
      <span>{props.message}</span>
    </div>
  )
}


export default MessageList
