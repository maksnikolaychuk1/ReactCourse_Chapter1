import { useState } from 'react';

function BookItem({ book, onDeleteBook, onEditBook }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [firstName, setFirstName] = useState(book.firstName);
  const [lastName, setLastName] = useState(book.lastName);
  const [phone, setPhone] = useState(book.phone);
  const [error, setError] = useState('');

  function handleEdit() {
    if (firstName.trim() === "" || lastName.trim() === "" || phone.trim() === "") {
      setError("Заповніть всі поля");
      return; 
    }

    const updatedBook = {
      id: book.id,
      firstName,
      lastName,
      phone,
    };

    onEditBook(updatedBook); 
    setIsEditMode(false); 
    setError(''); 
  }

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }

  function handleChangePhone(event) {
    setPhone(event.target.value);
  }

  return (
    <li>
      {isEditMode ? (
        <>
          <input
            type="text"
            value={firstName}
            onChange={handleChangeFirstName}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={handleChangeLastName}
            placeholder="Last Name"
          />
          <input
            type="text"
            value={phone}
            onChange={handleChangePhone}
            placeholder="Phone"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>} 
        </>
      ) : (
        <span>{book.firstName} {book.lastName} - {book.phone}</span>
      )}
      <button onClick={() => onDeleteBook(book.id)}>Delete</button>
      <button onClick={() => {
        if (isEditMode) {
          handleEdit();
        } else {
          setIsEditMode(true); 
          setError(''); 
          setFirstName(book.firstName); 
          setLastName(book.lastName);
          setPhone(book.phone);
        }
      }}>
        {isEditMode ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default BookItem;