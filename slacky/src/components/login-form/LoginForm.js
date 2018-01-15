import React from 'react';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

function LoginForm(props) {
  return(
    <form onSubmit={props.handleSubmitSignIn}>
      <TextField
        id="login"
        label="login"
        value={props.login}
        onChange={props.handleChangeLogin}
        margin="normal"
      />
      <TextField
        id="password"
        label="password"
        type="password"
        value={props.password}
        onChange={props.handleChangePassword}
        margin="normal"
      />
    <Button type="submit" raised color="primary">Submit</Button>
    </form>
  )
}

export default LoginForm;
