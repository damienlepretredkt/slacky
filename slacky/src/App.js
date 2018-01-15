import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/login-form/LoginForm'
import ChatComponent from './components/chat-component/ChatComponent'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isLoggedIn: false,
      message: '',
      isTyping: false,
      discussion: []
    }
    this.ws = new WebSocket("ws://10.110.130.59:8080");
  }

  componentDidMount() {
    //const ws = new WebSocket("ws://localhost:8080");
    // What to do when we receive a message?
    this.ws.onmessage = (event) => {

      this.setState({discussion: [...this.state.discussion, JSON.parse(event.data)]})
    };

    // Alert the server that the client is gone
    window.addEventListener("beforeunload", () => this.ws.send("CLOSE"));
    }

  render() {
    if (this.state.isLoggedIn) {
      return(
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Slacky</h1>
          </header>
          <ChatComponent
            isLoggedIn={this.state.isLoggedIn}
            login={this.state.login}
            message={this.state.message}
            handleSendMessage={this.handleSendMessage}
            handleTypingMessage={this.handleTypingMessage}
            discussion={this.state.discussion}></ChatComponent>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Slacky</h1>
          </header>
          <LoginForm isLoggedIn={this.state.isLoggedIn}
            login={this.state.login}
            password={this.state.password}
            handleChangeLogin={this.handleChangeLogin}
            handleChangePassword={this.handleChangePassword}
            handleSubmitSignIn={this.handleSubmitSignIn}>
          </LoginForm>
        </div>
      );
    }
  }

  handleChangeLogin = (event) => {
    this.setState({login: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleSubmitSignIn = (event) => {
    this.setState({isLoggedIn: true})
    event.preventDefault();
  }

  handleSendMessage = (event) => {
    const message = {login: this.state.login, message: this.state.message}
    this.ws.send(JSON.stringify(message));
    event.preventDefault();
  }

  handleTypingMessage = (event) => {
    this.setState({isTyping: true, message: event.target.value})
  }
}

export default App;
