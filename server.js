require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRotes = require("./src/rotes/authRotes.js");
const taskRotes = require("./src/rotes/taskRotes.js");

const app = express();
app.use(express.json());

app.use("/api/auth", authRotes);
ap.use("/api/tasks", taskRotes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Servidor rodando na porta ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("Erro ao conectar no MongoDB", err));
