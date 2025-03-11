import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Add user function
  const addUser = (user) => {
    axios.post('http://localhost:5000/api/users', user)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error('Error adding user:', error));
  };

  // Delete user function
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user._id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="container">
      <h1>User Management System</h1>
      <UserForm addUser={addUser} />
      <UserTable users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
