import express from "express";
import dotenv from "dotenv";

import db from "./app/db.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

try {
  db.sequelize.authenticate();
  console.log("Connected to databse");
  db.sequelize.sync()
} catch (err) {
  console.error("error while connecting", err);
}

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}`);
});
