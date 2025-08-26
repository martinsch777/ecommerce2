import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Se ejecuta una sola vez al montar el componente
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json(); // 👈 ahora sí con await
        setUsers(data); // guardamos en el estado
      } catch (error) {
        console.error("Error obteniendo usuarios:", error);
      }
    };

    obtenerUsuarios();
  }, []); // [] = solo al montar

  return (
    <table border="1" cellPadding="8" style={{ margin: "1rem auto" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Cargando usuarios...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Users;
