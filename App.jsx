import React, {useState, useEffect} from 'react';

import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from "./assets/heart2.jpeg";
import inprogressIcon from "./assets/heart.jpeg";
import completedIcon from "./assets/heart3.jpeg";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  //use of useEffect React hook to store data locally
  useEffect(()=> {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index)=> index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className = 'app'>
      <TaskForm setTasks={setTasks}/>
      <header className = 'app_header'></header>
      <main className = 'app_main'>
        <TaskColumn taskColumnName="To Do" icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn taskColumnName="In Progress" icon={inprogressIcon} tasks={tasks} status="in progress" handleDelete={handleDelete}/>
        <TaskColumn taskColumnName="Completed" icon={completedIcon} tasks={tasks} status ="completed" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App
