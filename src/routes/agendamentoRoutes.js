
import express from "express";

import {
  criarAgendamento,
  listarAgendamentos,
  buscarAgendamentoPorId,
  atualizarAgendamento,
  deletarAgendamento
} from "../controllers/agendamentoController.js";

import validateId from "../middlewares/validateId.js";

const router = express.Router();

router.post("/agendamento", criarAgendamento);

router.get("/agendamento", listarAgendamentos);

router.route("/agendamento/:id")
  .get(validateId, buscarAgendamentoPorId)
  .put(validateId, atualizarAgendamento)
  .delete(validateId, deletarAgendamento);

export default router;
