import React, { Component } from 'react'

import MenuAppBar from "./components/header/MenuAppBar"
import InputContainer from "./components/property-input/InputContainer"

import './App.css'

class App extends Component {
  render() {
    return (
        <div className="react-desktop-app">
          <MenuAppBar/>
          <InputContainer/>
        </div>
    )
  }
}

export default App
