import React, { Component } from 'react'
import './App.css'

import AppHeader from './AppHeader'

const GreetingChanger = ({ onClick }) => (
  <p>
    Change the greeting...
    <button type="buttons" onClick={onClick}>
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
        <GreetingChanger onClick={this.handleButtonClick}/>
      </div>
    )
  }
}

export default App
