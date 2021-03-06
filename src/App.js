import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//import Task from './components/Task'

function App() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Lorem ipsum",
      "day": "Apr 5th, at 11:00",
      "reminder": true,
    }, {
      "id": 2,
      "text": "consectetur adipiscing",
      "day": "Apr 5th, at 11:00",
      "reminder": false,
    }, {
      "id": 3,
      "text": "dolor sit amet",
      "day": "Apr 5th, at 11:00",
      "reminder": true,
    }, {
      "id": 4,
      "text": "Lorem ipsum",
      "day": "Apr 5th, at 11:00",
      "reminder": false,
    }]
  )

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete tasks 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? 
      (<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
      :
      "No Tasks To show"}
    </div>
  );
}

export default App;
