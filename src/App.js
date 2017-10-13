import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = ({ greeting }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{ greeting }</h1>
  </header>
)

const GreetingChanger = ({ target }) => (
  <p>
    Change the greeting...
    <button type="buttons" onClick={target.handleButtonClick}>
      Click me!
    </button>
  </p>
)

const AppIntro = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

class App extends Component {
  state = { greeting: "Howdy!!!" }

  handleButtonClick = () => {
    this.setState({
      greeting: "Hellooooo!!!"
    })

    console.log("handle click")
  }

  render() {
    return (
      <div className="App">
        <AppHeader greeting={ this.state.greeting }/>
        <AppIntro/>
        <GreetingChanger target={this}/>
      </div>
    )
  }
}

export default App
