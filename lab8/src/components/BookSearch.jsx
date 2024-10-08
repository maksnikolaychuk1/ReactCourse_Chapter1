function BookSearch({ searchTitle, setSearchTitle }) {
  
  function handleSearch(event) {
    setSearchTitle(event.target.value); 
  }

  return (
    <div>
      <input
        type="text"
        value={searchTitle} 
        onChange={handleSearch} 
        placeholder="Що хочете знайти?" 
      />
    </div>
  );
}

export default BookSearch;

