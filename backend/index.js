const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  getUser,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
} = require("./controller/UserController");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/piket");

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database berhasil terhubung"));

app.use(cors());
app.use(express.json());
app.get("/users", getUser);
app.get("/users/:id", getUserById);
app.post("/users", saveUser);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(5000, () => console.log("server sedang berjalan di http://localhost:5000"));
