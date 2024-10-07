function TaskSearch({ searchTitle, setSearchTitle }) {
  function handlSearch(event) {
    setSearchTitle(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchTitle}
        onChange={handlSearch}
        placeholder="Що хочете знайти?"
      />
    </div>
  );
}

export default TaskSearch;
