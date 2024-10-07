import ToDoItem from "./ToDoItem";

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <div>
      <ul>
        {tasks.map((t) => (
          <ToDoItem
          key={t.id}
          task={t}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
