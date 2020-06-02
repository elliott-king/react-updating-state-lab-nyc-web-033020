import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    this.setState(prevState => {
      return {timesClicked: 1 + prevState.timesClicked}
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}