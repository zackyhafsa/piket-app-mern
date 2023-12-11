import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/id";
dayjs.locale("id");
dayjs.extend(localizedFormat);

const Today = () => {
  const [time, setTime] = useState(dayjs().locale("id").format("LTS"));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    detik();
    user();
  }, []);

  const detik = () => {
    setInterval(() => {
      setTime(dayjs().locale("id").format("LTS"));
    }, 1000);
  };

  let i = 1;
  const sekarang = dayjs().locale("id").format("LLLL");
  const hari = dayjs().locale("id").format("dddd").toUpperCase();

  const user = async () => {
    try {
      const response = await axios.get("https://piket-app-mern-backend.vercel.app/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-28">
      <h1 className="font-bold text-3xl text-neutral text-center">Piket Hari Ini</h1>
      <div className="w-[60%] mx-auto mt-4 max-sm:w-[85%]">
        <p className="text-xl font-semibold text-neutral">{sekarang}</p>
        <p>{time}</p>
        {hari === "JUMAT" || hari === "SABTU" || hari === "MINGGU" ? (
          <p>Tidak ada yang piket</p>
        ) : (
          users.map((user) => {
            if (user.hari.toUpperCase() === hari) {
              return (
                <ul type="1" key={user._id} className="mt-4">
                  <li className="font-semibold text-neutral text-lg">
                    {i++}. {user.nama.toUpperCase()}
                  </li>
                  <li className="text-neutral">Jam: {user.waktu}</li>
                </ul>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default Today;
