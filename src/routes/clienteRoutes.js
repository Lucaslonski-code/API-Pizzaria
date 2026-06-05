
import express from "express";

import {
  criarCliente,
  listarClientes,
  buscarClientePorId,
  atualizarCliente,
  deletarCliente
} from "../controllers/clienteController.js";

import validateId from "../middlewares/validateId.js";

const router = express.Router();

router.post("/cliente", criarCliente);

router.get("/cliente", listarClientes);

router.route("/cliente/:id")
  .get(validateId, buscarClientePorId)
  .put(validateId, atualizarCliente)
  .delete(validateId, deletarCliente);

export default router;
