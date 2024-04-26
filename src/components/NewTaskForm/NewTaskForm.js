import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  static defaultProps = {
    onAddTask: () => {},
  }

  static propTypes = {
    onAddTask: PropTypes.func,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
  }

  constructor() {
    super()
    this.state = {
      text: '',
      minutes: '',
      seconds: '',
    }
  }

  minutesInput = (e) => {
    this.setState({ minutes: e.target.value })
  }

  secondsInput = (e) => {
    this.setState({ seconds: e.target.value })
  }

  textInput = (e) => {
    this.setState({ text: e.target.value })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      console.log('Minutes:', this.state.minutes)
      console.log('Seconds:', this.state.seconds)
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        text: this.state.text,
        minutes: this.state.minutes,
        seconds: this.state.seconds,
      }
      this.props.onAddTask(newTask, this.state.minutes, this.state.seconds)
      this.setState({ text: '', minutes: '', seconds: '' })
    }
  }

  render() {
    return (
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.text}
          onChange={this.textInput}
          onKeyPress={this.handleKeyPress}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          value={this.state.minutes}
          onChange={this.minutesInput}
          onKeyPress={this.handleKeyPress}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          value={this.state.seconds}
          onChange={this.secondsInput}
          onKeyPress={this.handleKeyPress}
        />
      </form>
    )
  }
}
