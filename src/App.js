import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
//import Task from './components/Task'

function App() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Lorem ipsum",
      "reminder": true,
    }, {
      "id": 2,
      "text": "consectetur adipiscing",
      "reminder": true,
    }, {
      "id": 3,
      "text": "dolor sit amet",
      "reminder": true,
    }, {
      "id": 4,
      "text": "Lorem ipsum",
      "reminder": true,
    }]
  )

  return (
    <div className="container">
      <Header />
      <Tasks  tasks={tasks}/>
    </div>
  );
}

export default App;
