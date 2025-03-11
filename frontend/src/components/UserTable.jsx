import React from 'react';

function UserTable({ users, deleteUser }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.mobile}</td>
            <td>{user.address}</td>
            <td>
              <button onClick={() => deleteUser(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
