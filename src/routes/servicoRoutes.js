
import express from "express";

import { criarServico, listarServicos, buscarServicoPorId, atualizarServico, deletarServico } from "../controllers/servicoController.js";

import validateId from "../middlewares/validateId.js";

const router = express.Router();

router.post("/servico", criarServico);

router.get("/servico", listarServicos);

router.route("/servico/:id")
  .get(validateId, buscarServicoPorId)
  .put(validateId, atualizarServico)
  .delete(validateId, deletarServico);

export default router;
