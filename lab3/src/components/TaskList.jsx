function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span>{t.title}</span>
            <button onClick={() => onDeleteTask(t.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
