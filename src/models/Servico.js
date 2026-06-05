
import mongoose from "mongoose";

const servicoSchema = new mongoose.Schema({

  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empresa",
    required: true
  },

  nome: {
    type: String,
    required: true,
    trim: true
  },

  descricao: {
    type: String,
    default: ""
  },

  preco: {
    type: Number,
    required: true
  },

  duracaoMinutos: {
    type: Number,
    required: true
  },

  ativo: {
  type: Boolean,
  default: true
}

}, {
  timestamps: true
});

const Servico = mongoose.model(
  "Servico",
  servicoSchema
);

export default Servico;
