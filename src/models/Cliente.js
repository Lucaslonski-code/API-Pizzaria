
import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
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

    telefone: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Cliente",
  clienteSchema
);