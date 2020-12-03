
import './App.css';


import Task from './task/Task'
import TaskGroup from './task-group/TaskGroup'

function App() {
  return (
    <div className="App">
      
  <TaskGroup title="To-do" content= {[<Task />,<Task />]} />
  <TaskGroup title="Do today" content= {[<Task />,<Task />]} />
  <TaskGroup title="In progress" content= {[<Task />,<Task />]} />
  <TaskGroup title="Done" content= {[<Task />,<Task />]} />
    
    </div>
  )
}

export default App;
