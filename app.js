import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import empresaRoutes from "./src/routes/empresaRoutes.js";
import servicoRoutes from "./src/routes/servicoRoutes.js";
import clienteRoutes from "./src/routes/clienteRoutes.js";
import agendamentoRoutes from "./src/routes/agendamentoRoutes.js";

import connectDB from "./src/config/mongodb.js";

dotenv.config();

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(empresaRoutes);
app.use(servicoRoutes);
app.use(clienteRoutes);
app.use(agendamentoRoutes);

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