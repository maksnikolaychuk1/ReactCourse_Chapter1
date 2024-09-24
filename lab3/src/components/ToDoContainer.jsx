import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskSearch from './TaskSearch';


function ToDoContainer() {
  const [tasks, setTasks] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  

  function handleAddTask(task) {
    setTasks((prev) => [task, ...prev]);
  }

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((x) => x.id !== id));
  }

  const filteredTasks = tasks.filter((x) =>
    x.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <TaskSearch searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default ToDoContainer;
