import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
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
      "reminder": true,
    }, {
      "id": 3,
      "text": "dolor sit amet",
      "day": "Apr 5th, at 11:00",
      "reminder": true,
    }, {
      "id": 4,
      "text": "Lorem ipsum",
      "day": "Apr 5th, at 11:00",
      "reminder": true,
    }]
  )

  // Delete tasks 
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks  tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
