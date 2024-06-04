import React, { useState } from 'react';
// import './Styles.css';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.phoneNumber) {
      setMessage('Please fill out all fields!');
      return;
    }
    setMessage('Registration successful!');
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        {message && <p className={`message ${message === 'Registration successful!' ? '' : 'error'}`}>{message}</p>}
      </div>
    </div>
  );
};

export default RegistrationForm;