import {useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskSearch from './TaskSearch';
import useGetAllToDo from '../hooks/useGetAllToDo';

function ToDoContainer() {
  const [searchTitle, setSearchTitle] = useState('');
  const {data, setData, isLoading} = useGetAllToDo()

  function handleAddTask(task) {
    setData((prev) => [task, ...prev]);
  }

  function handleDeleteTask(id) {
    setData((prev) => prev.filter((x) => x.id !== id));
  }

  const filteredTasks = data.filter((x) =>
    x.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <TaskSearch searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <TaskForm onAddTask={handleAddTask} />
      {isLoading ? (
        <p>Завантаження</p>
      ) : (
        <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      )}
    </>
  );
}

export default ToDoContainer;
