import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";

import empresaRoutes from "./src/routes/empresaRoutes.js";
import servicoRoutes from "./src/routes/servicoRoutes.js";
import clienteRoutes from "./src/routes/clienteRoutes.js";
import agendamentoRoutes from "./src/routes/agendamentoRoutes.js";

import googleRoutes from "./src/routes/googleRoutes.js";

import connectDB from "./src/config/mongodb.js";

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(empresaRoutes);
app.use(servicoRoutes);
app.use(clienteRoutes);
app.use(agendamentoRoutes);
app.use(googleRoutes);

app.get("/ping", (req, res) => {
  return res.json({
    sucesso: true
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Servidor rodando na porta ${process.env.PORT}`
  );
});