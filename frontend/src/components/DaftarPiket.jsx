import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const DaftarPiket = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    // const response = await axios.get("http://localhost:5000/users");
    // console.log(response.data);
    // setUser(response.data);

    try {
      const response = await axios.get("https://piket-app-mern-backend.vercel.app/users");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="overflow-x-auto w-[60%] mx-auto mt-28 max-sm:w-[80%]">
        <h1 className="text-center font-bold text-3xl text-neutral">Daftar Piket</h1>
        <div className="mt-4">
          <Link to="/add" className="btn btn-neutral">
            Tambah
          </Link>
        </div>
        <table className="table text-lg mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Nama</th>
              <th>Sesi</th>
              <th>Hari</th>
              <th>Waktu</th>
            </tr>
          </thead>
          <tbody className="max-sm:text-">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.nama}</td>
                <td>{user.sesi}</td>
                <td>{user.hari}</td>
                <td>{user.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
