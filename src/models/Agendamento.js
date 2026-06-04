
import mongoose from "mongoose";

const agendamentoSchema =
  new mongoose.Schema(
    {
      empresaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Empresa",
        required: true
      },

      clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
      },

      servicoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Servico",
        required: true
      },

      dataHora: {
        type: Date,
        required: true
      },

      status: {
        type: String,
        enum: [
          "agendado",
          "cancelado",
          "concluido"
        ],
        default: "agendado"
      }
    },
    {
      timestamps: true
    }
  );

export default mongoose.model(
  "Agendamento",
  agendamentoSchema
);