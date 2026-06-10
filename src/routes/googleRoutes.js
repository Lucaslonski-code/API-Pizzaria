
import express from "express";

import {
  googleAuth,
  googleCallback
} from "../controllers/googleController.js";

import {
  criarEventoGoogle
}
from "../integrations/google/googleCalendar.js";

const router =
  express.Router();

router.get(
  "/google/auth/:empresaId",
  googleAuth
);

router.get(
  "/google/callback",
  googleCallback
);

router.get(
  "/google/test-event/:empresaId",

  async (req, res) => {

    try {

      const resultado =
        await criarEventoGoogle(

          req.params.empresaId,

          {

            summary:
              "Teste Multiempresa",

            description:
              "Evento criado usando token salvo no MongoDB",

            start:
              "2026-06-20T14:00:00-03:00",

            end:
              "2026-06-20T15:00:00-03:00"

          }

        );

      return res.json(
        resultado
      );

    } catch (error) {

      return res.status(500).json({

        erro:
          error.message

      });

    }

  }
);

export default router;
