import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    mobile: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.surname || !formData.mobile || !formData.address) {
      alert('All fields are required!');
      return;
    }
    addUser(formData);
    setFormData({ name: '', surname: '', mobile: '', address: '' });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />
      <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
