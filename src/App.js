import React, { Component } from 'react'
import './App.css'
import MenuAppBar from "./components/header/MenuAppBar"
import InputContainer from "./components/property-input/InputContainer"

class App extends Component {
  render() {
    return (
        <div className="react-desktop-app">
          <header className="header-wrap"><MenuAppBar/></header>
          <section className="property-description-container"><InputContainer/></section>
        </div>
    )
  }
}

export default App
