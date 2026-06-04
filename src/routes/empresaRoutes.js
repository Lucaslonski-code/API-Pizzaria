
import express from "express";
import Empresa from "../models/Empresa.js";

const router = express.Router();

router.post("/empresa",
  async (req, res) => {
    try {
      const empresa =
        await Empresa.create(req.body);

      return res.status(201).json(
        empresa
      );
    } catch (error) {
      return res.status(500).json({
        erro: error.message
      });
    }
  }
);

export default router;