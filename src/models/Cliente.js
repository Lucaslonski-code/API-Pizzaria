
import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({

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

  telefone: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    default: "",
    trim: true
  },

  ativo: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
});

const Cliente = mongoose.model(
  "Cliente",
  clienteSchema
);

export default Cliente;
