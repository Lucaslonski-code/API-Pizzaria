
import express from "express";

import { criarEmpresa, listarEmpresas, buscarEmpresaPorId, atualizarEmpresa, deletarEmpresa } from "../controllers/empresaController.js";
import validateId from "../middlewares/validateId.js";

const router = express.Router();

router.post( "/empresa", criarEmpresa );
router.get( "/empresa", listarEmpresas );
// empresa por id com middleware: validateId
router.route("/empresa/:id")
  .get(validateId, buscarEmpresaPorId)
  .put(validateId, atualizarEmpresa)
  .delete(validateId, deletarEmpresa);

export default router;