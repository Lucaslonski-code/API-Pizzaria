import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import empresaRoutes from "./routes/empresaRoutes.js";

import connectDB from "./config/mongodb.js";

dotenv.config();

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(empresaRoutes);

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