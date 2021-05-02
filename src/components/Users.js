import React from "react";
import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const Users = () => {
  const { users } = useUsers();

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>last name</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <UserRow key={user.id} user={user} />;
          })}
        </tbody>
      </table>
    </>
  );
};
