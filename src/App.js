import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = ({ greeting }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{ greeting }</h1>
  </header>
)

class App extends Component {
  constructor() {
    super()
    this.state = { greeting: "Howdy!!!" }
  }

  handleButtonClick() {
    this.setState({
      greeting: "Hellooooo!!!"
    })

    console.log("handle click")
  }

  render() {
    return (
      <div className="App">
        <AppHeader greeting={ this.state.greeting }/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button type="buttons" onClick={this.handleButtonClick}>
            Click me!
          </button>
        </p>
      </div>
    )
  }
}

export default App
