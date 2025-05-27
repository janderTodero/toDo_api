require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./src/routes/authRoutes.js");
const taskRoutes = require("./src/routes/taskRoutes.js");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Servidor rodando na porta ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("Erro ao conectar no MongoDB", err));
