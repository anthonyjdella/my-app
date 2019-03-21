import React, { Component } from 'react'
import './App.css'
import MenuAppBar from "./MenuAppBar"
import InputContainer from "./InputContainer"

class App extends Component {
  render() {
    return (
        <div className="react-desktop-app">
          <header className="header-wrap"><MenuAppBar/></header>
          <section className="input-container"><InputContainer/></section>
        </div>

    )
  }
}

export default App
