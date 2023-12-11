const mongoose = require("mongoose");

const User = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  sesi: {
    type: String,
    required: true,
  },
  hari: {
    type: String,
    required: true,
  },
  waktu: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", User);
