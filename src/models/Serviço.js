
import mongoose from "mongoose";

const servicoSchema = new mongoose.Schema(
  {
    empresaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Empresa",
      required: true
    },

    nome: {
      type: String,
      required: true
    },

    preco: {
      type: Number,
      required: true
    },

    duracaoMinutos: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Servico",
  servicoSchema
);