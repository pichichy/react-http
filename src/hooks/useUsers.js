import { useState, useEffect } from "react";
import instance from "../api/api";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const {
      data: { data },
    } = await instance.get("https://reqres.in/api/users");
    setUsers(data);
  };

  return {
    users,
  };
};
