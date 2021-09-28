import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    isShowClock: false,
  }

  onToggleClockBtn = () => {
    this.setState(prevState => ({isShowClock: !prevState.isShowClock}))
  }

  render() {
    const {isShowClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClockBtn}
        >
          {isShowClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShowClock && <Clock />}
      </div>
    )
  }
}

export default App
