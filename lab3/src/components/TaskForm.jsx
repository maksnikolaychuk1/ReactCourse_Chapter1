import { useState } from 'react';
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === '') {
      setError('Поле пусте або введене невірно');
      return;
    }

    const task = {
      id: Date.now(),
      title: title,
    };

    console.log(task);
    onAddTask(task);
    setTitle('');
    setError('');
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Введіть назву"
      />

      <button type="submit">Додати</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default TaskForm;
