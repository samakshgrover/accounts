import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./app/models/db.mjs";
import userRouter from "./app/routes/user.routes.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/users", userRouter);
app.get("/", (req, res) => res.end("Working !!!"));

try {
  db.sequelize.authenticate();
  console.log("Connected to databse");
  (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    // Create a Tutorial
    const tutorial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    };

    // Save Tutorial in the database
    Tutorial.create(tutorial)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      });
  };
  db.sequelize.sync();
} catch (err) {
  console.error("error while connecting", err);
}

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}`);
});
