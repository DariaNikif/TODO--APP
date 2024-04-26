import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './Task.css'

// export default class Task extends Component {
//   constructor() {
//     super()
//     this.state = {
//       completed: false,
//       editing: false,
//       editingTaskText: '',
//       currentTime: 0, // текущее время в секундах
//       isRunning: false, // флаг, показывающий, запущен ли таймер
//     }
//   }

//   static defaultProps = {
//     task: {},
//     className: '',
//     onDelete: () => {},
//     onTaskCompleted: () => {},
//     clickOnInput: () => {},
//     onEditTask: () => {},
//     createdAt: new Date(),
//     minutes: '',
//     seconds: '',
//   }

//   static propTypes = {
//     task: PropTypes.object.isRequired,
//     className: PropTypes.string,
//     onDelete: PropTypes.func.isRequired,
//     onTaskCompleted: PropTypes.func.isRequired,
//     clickOnInput: PropTypes.func.isRequired,
//     onEditTask: PropTypes.func.isRequired,
//     createdAt: PropTypes.instanceOf(Date).isRequired,
//     minutes: PropTypes.string,
//     seconds: PropTypes.string,
//   }

//   startTimer = () => {
//     if (!this.state.isRunning) {
//       // Преобразование минут и секунд в секунды
//       const totalSeconds = parseInt(this.props.minutes || 0) * 60 + parseInt(this.props.seconds || 0)

//       this.setState({ currentTime: totalSeconds, isRunning: true }, () => {
//         // Запуск интервала, который каждую секунду уменьшает текущее время на 1
//         this.timerId = setInterval(() => {
//           this.setState(
//             (prevState) => ({
//               // Уменьшение текущего времени на 1 секунду
//               currentTime: prevState.currentTime - 1,
//             }),
//             () => {
//               // Остановка таймера, если текущее время достигло 00:00
//               if (this.state.currentTime <= 0) {
//                 clearInterval(this.timerId)
//                 this.setState({ isRunning: false })
//               }
//             }
//           )
//         }, 1000) // Обновляем каждую секунду
//       })
//     }
//   }

//   pauseTimer = () => {
//     clearInterval(this.timerId)
//     this.setState({ isRunning: false })
//   }

//   handleEdit = () => {
//     this.setState({ editing: true, editingTaskText: this.props.task.text })
//   }

//   handleInputChange = (e) => {
//     this.setState({ editingTaskText: e.target.value })
//   }

//   handleSave = () => {
//     const { task } = this.props
//     const { editingTaskText } = this.state
//     if (editingTaskText.trim() !== '') {
//       this.props.onEditTask(task.id, editingTaskText)
//       this.setState({ editing: false })
//     }
//   }

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleSave()
//     }
//   }

//   render() {
//     // const { task, className, onDelete, minutes, seconds } = this.props
//     // const { editing, editingTaskText, currentTime, isRunning } = this.state
//     const { task, className, onDelete } = this.props
//     const { editing, editingTaskText, currentTime } = this.state
//     const liClassName = `${className ? `${className} ` : ''}${task.completed ? 'completed' : ''}${editing ? ' editing' : ''}`

//     return (
//       <li className={liClassName}>
//         <div className="view">
//           {!editing ? (
//             <>
//               <input
//                 className="toggle"
//                 type="checkbox"
//                 onClick={() => this.props.clickOnInput(task.id)}
//                 defaultChecked={task.completed}
//               />
//               <label>
//                 <span className="description title">{task.text}</span>
//                 <span className="description control-timer">
//                   <button className="icon icon-play" onClick={this.startTimer}></button>
//                   <button className="icon icon-pause" onClick={this.pauseTimer}></button>
//                   <span>
//                     {`${Math.floor(currentTime / 60)}:${currentTime % 60 < 10 ? '0' : ''}${currentTime % 60}`}
//                   </span>
//                 </span>
//                 <span className="description">{formatDistanceToNow(new Date(this.props.createdAt))}</span>
//               </label>
//               <button className="icon icon-edit" onClick={this.handleEdit} />
//               <button className="icon icon-destroy" onClick={onDelete} />
//             </>
//           ) : (
//             <input
//               className="edit"
//               type="text"
//               value={editingTaskText}
//               onChange={this.handleInputChange}
//               onKeyPress={this.handleKeyPress}
//               autoFocus
//             />
//           )}
//         </div>
//       </li>
//     )
//   }
// }

export default class Task extends Component {
  constructor() {
    super()
    this.state = {
      completed: false,
      editing: false,
      editingTaskText: '',
      currentTime: 0, // текущее время в секундах
      isRunning: false, // флаг, показывающий, запущен ли таймер
    }
  }

  static defaultProps = {
    task: {},
    className: '',
    onDelete: () => {},
    onTaskCompleted: () => {},
    clickOnInput: () => {},
    onEditTask: () => {},
    createdAt: new Date(),
    minutes: '',
    seconds: '',
  }

  static propTypes = {
    task: PropTypes.object.isRequired,
    className: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onTaskCompleted: PropTypes.func.isRequired,
    clickOnInput: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      // Преобразование минут и секунд в секунды
      const totalSeconds = parseInt(this.props.minutes || 0) * 60 + parseInt(this.props.seconds || 0)

      this.setState({ currentTime: totalSeconds, isRunning: true }, () => {
        // Запуск интервала, который каждую секунду уменьшает текущее время на 1
        this.timerId = setInterval(() => {
          this.setState(
            (prevState) => ({
              // Уменьшение текущего времени на 1 секунду
              currentTime: prevState.currentTime - 1,
            }),
            () => {
              // Остановка таймера, если текущее время достигло 00:00
              if (this.state.currentTime <= 0) {
                clearInterval(this.timerId)
                this.setState({ isRunning: false })
              }
            }
          )
        }, 1000) // Обновляем каждую секунду
      })
    }
  }

  pauseTimer = () => {
    clearInterval(this.timerId)
    this.setState({ isRunning: false })
  }

  handleEdit = () => {
    this.setState({ editing: true, editingTaskText: this.props.task.text })
  }

  handleInputChange = (e) => {
    this.setState({ editingTaskText: e.target.value })
  }

  handleSave = () => {
    const { task } = this.props
    const { editingTaskText } = this.state
    if (editingTaskText.trim() !== '') {
      this.props.onEditTask(task.id, editingTaskText)
      this.setState({ editing: false })
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSave()
    }
  }

  render() {
    // const { task, className, onDelete, minutes, seconds } = this.props
    // const { editing, editingTaskText, currentTime, isRunning } = this.state
    const { task, className, onDelete } = this.props
    const { editing, editingTaskText, currentTime } = this.state
    const liClassName = `${className ? `${className} ` : ''}${task.completed ? 'completed' : ''}${editing ? ' editing' : ''}`

    return (
      <li className={liClassName}>
        <div className="view">
          {!editing ? (
            <>
              <input
                className="toggle"
                type="checkbox"
                onClick={() => this.props.clickOnInput(task.id)}
                defaultChecked={task.completed}
              />
              <label>
                <span className="description title">{task.text}</span>
                <span className="description control-timer">
                  <button className="icon icon-play" onClick={this.startTimer}></button>
                  <button className="icon icon-pause" onClick={this.pauseTimer}></button>
                  <span>
                    {`${Math.floor(currentTime / 60)}:${currentTime % 60 < 10 ? '0' : ''}${currentTime % 60}`}
                  </span>
                </span>
                <span className="description">{formatDistanceToNow(new Date(this.props.createdAt))}</span>
              </label>
              <button className="icon icon-edit" onClick={this.handleEdit} />
              <button className="icon icon-destroy" onClick={onDelete} />
            </>
          ) : (
            <input
              className="edit"
              type="text"
              value={editingTaskText}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              autoFocus
            />
          )}
        </div>
      </li>
    )
  }
}
