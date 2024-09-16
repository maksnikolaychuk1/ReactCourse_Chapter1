import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();

    const t = {
      id: Date.now(),
      title: title,
    };

    setTasks((prev) => [t, ...prev]);

    setTitle('');
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function onDelete(id) {
    setTasks((prev) => prev.filter((x) => x.id !== id));
  }

  function handleSearch(event) {
    setSearchTitle(event.target.value);
  }

  const filtered = tasks.filter((x) =>
    x.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <div>
        <input type="text" value={searchTitle} onChange={handleSearch} />
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <div>
        <ul>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <li key={t.id}>
                <span>{t.title}</span>
                <button onClick={() => onDelete(t.id)}>Delete</button>
              </li>
            ))
          ) : (
            <p>No data</p>
          )}
        </ul>
      </div>
    </>
  );
}
export default App

