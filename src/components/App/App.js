import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
import './App.css'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       tasks: [
//         { id: 1, text: 'Check mail', completed: false, editing: false },
//         { id: 2, text: 'Drink coffee', completed: false, editing: false },
//         { id: 3, text: 'Buy a cake', completed: false, editing: false },
//       ],
//       filter: 'all',
//       minutes: '',
//       seconds: '',
//     }
//   }

//   // Изменение значения свойства у элемента
//   handleTaskCompleted = (id, completed) => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, completed } : task)),
//     }))
//   }

//   // Добавление задач
//   handleAddTask = (newTask, minutes, seconds) => {
//     console.log('New Task:', newTask)
//     const createdTask = {
//       ...newTask,
//       createdAt: new Date(),
//       minutes: minutes,
//       seconds: seconds,
//     }
//     this.setState((prevState) => ({
//       tasks: [...prevState.tasks, createdTask],
//     }))
//   }
//   // это версия с вызовом старт, но будет работать только после переноса старт в апп
//   // handleAddTask = (newTask, minutes, seconds) => {
//   //   console.log('New Task:', newTask)
//   //   const createdTask = {
//   //     ...newTask,
//   //     createdAt: new Date(),
//   //     minutes: minutes,
//   //     seconds: seconds,
//   //   }
//   //   this.setState(
//   //     (prevState) => ({
//   //       tasks: [...prevState.tasks, createdTask],
//   //     }),
//   //     () => {
//   //       // Вызов метода startTimer для последней добавленной задачи
//   //       this.startTimer(createdTask.id)
//   //     }
//   //   )
//   // }

//   // Удаление задач
//   handleDeleteTask = (id) => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.filter((task) => task.id !== id),
//     }))
//   }

//   // Удаление всех выполненных задач
//   handleClearCompletedTasks = () => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.filter((task) => !task.completed),
//     }))
//   }

//   // Фильтрация по кнопкам
//   handleFilterTasks = (filter) => {
//     this.setState({ filter })
//   }

//   filterTasks = (tasks, filter) => {
//     if (filter === 'active') {
//       return tasks.filter((task) => !task.completed)
//     } else if (filter === 'completed') {
//       return tasks.filter((task) => task.completed)
//     } else {
//       return tasks
//     }
//   }

//   // Состояние задач
//   clickOnInput = (id) => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
//     }))
//   }

//   // Подсчет активных задач
//   countIncompleteTasks = () => {
//     const { tasks } = this.state
//     return tasks.filter((task) => !task.completed).length
//   }

//   // Редактирование задач
//   handleEditTask = (id, newText) => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
//     }))
//   }

//   render() {
//     const { filter, tasks } = this.state
//     const filteredTasks = this.filterTasks(tasks, filter)

//     return (
//       <section className="todoapp">
//         <header className="header">
//           <h1>todos</h1>
//           <NewTaskForm onAddTask={this.handleAddTask} />
//         </header>
//         <section className="main">
//           <TaskList
//             tasks={filteredTasks}
//             onDeleteTask={this.handleDeleteTask}
//             onTaskCompleted={this.handleTaskCompleted}
//             clickOnInput={this.clickOnInput}
//             onEditTask={this.handleEditTask}
//             createdAt={new Date()}
//             minutes={this.state.minutes}
//             seconds={this.state.seconds}
//           />
//           <Footer
//             filter={this.state.filter}
//             onClearCompletedTasks={this.handleClearCompletedTasks}
//             onFilterTasks={this.handleFilterTasks}
//             countIncompleteTasks={this.countIncompleteTasks}
//           />
//         </section>
//       </section>
//     )
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'))

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, text: 'Check mail', completed: false, editing: false },
        { id: 2, text: 'Drink coffee', completed: false, editing: false },
        { id: 3, text: 'Buy a cake', completed: false, editing: false },
      ],
      filter: 'all',
      minutes: '',
      seconds: '',
    }
  }

  // Изменение значения свойства у элемента
  handleTaskCompleted = (id, completed) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, completed } : task)),
    }))
  }

  // Добавление задач
  handleAddTask = (newTask, minutes, seconds) => {
    console.log('New Task:', newTask)
    const createdTask = {
      ...newTask,
      createdAt: new Date(),
      minutes: minutes,
      seconds: seconds,
    }
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, createdTask],
    }))
  }
  // это версия с вызовом старт, но будет работать только после переноса старт в апп
  // handleAddTask = (newTask, minutes, seconds) => {
  //   console.log('New Task:', newTask)
  //   const createdTask = {
  //     ...newTask,
  //     createdAt: new Date(),
  //     minutes: minutes,
  //     seconds: seconds,
  //   }
  //   this.setState(
  //     (prevState) => ({
  //       tasks: [...prevState.tasks, createdTask],
  //     }),
  //     () => {
  //       // Вызов метода startTimer для последней добавленной задачи
  //       this.startTimer(createdTask.id)
  //     }
  //   )
  // }

  // Удаление задач
  handleDeleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }))
  }

  // Удаление всех выполненных задач
  handleClearCompletedTasks = () => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => !task.completed),
    }))
  }

  // Фильтрация по кнопкам
  handleFilterTasks = (filter) => {
    this.setState({ filter })
  }

  filterTasks = (tasks, filter) => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed)
    } else if (filter === 'completed') {
      return tasks.filter((task) => task.completed)
    } else {
      return tasks
    }
  }

  // Состояние задач
  clickOnInput = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    }))
  }

  // Подсчет активных задач
  countIncompleteTasks = () => {
    const { tasks } = this.state
    return tasks.filter((task) => !task.completed).length
  }

  // Редактирование задач
  handleEditTask = (id, newText) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    }))
  }

  render() {
    const { filter, tasks } = this.state
    const filteredTasks = this.filterTasks(tasks, filter)

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAddTask={this.handleAddTask} />
        </header>
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onDeleteTask={this.handleDeleteTask}
            onTaskCompleted={this.handleTaskCompleted}
            clickOnInput={this.clickOnInput}
            onEditTask={this.handleEditTask}
            createdAt={new Date()}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
          />
          <Footer
            filter={this.state.filter}
            onClearCompletedTasks={this.handleClearCompletedTasks}
            onFilterTasks={this.handleFilterTasks}
            countIncompleteTasks={this.countIncompleteTasks}
          />
        </section>
      </section>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
