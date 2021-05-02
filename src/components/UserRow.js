import React from "react";

export const UserRow = ({ user }) => {
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>
        <img src={user.avatar} alt={user.email} className=""></img>
      </td>
    </tr>
  );
};
