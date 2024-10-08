import { useState } from 'react';

function BookForm({ onAddBook }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName.trim() === '') {
      setError('The first name is required');
      return;
    }
    if (lastName.trim() === '') {
      setError('The last name is required');
      return;
    }
    if (phone.trim() === '') {
      setError('The phone is required');
      return;
    }

    const book = {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };

    onAddBook(book);
    setFirstName('');
    setLastName('');
    setPhone('');
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
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default BookForm;

