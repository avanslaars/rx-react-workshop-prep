import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { updateCurrent } from './redux/modules/searchApp'

class App extends Component {
  handleInputChange = evt => {
    evt.preventDefault()
    this.props.updateCurrent(evt.target.value)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Demo App</h1>
        </header>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.props.inputValue}
        />
        <h1>{this.props.displayValue}</h1>
      </div>
    )
  }
}

export default connect(state => state, { updateCurrent })(App)
