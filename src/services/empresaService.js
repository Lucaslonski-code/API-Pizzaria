
import Empresa from "../models/Empresa.js";

export async function criarEmpresaService(dados) {

  return await Empresa.create(dados);

}

export async function listarEmpresasService() {

  return await Empresa.find();

}

export async function buscarEmpresaPorIdService(id) {

  return await Empresa.findById(id);

}

export async function atualizarEmpresaService(
  id,
  dados
) {

  return await Empresa.findByIdAndUpdate(
    id,
    dados,
    {
    returnDocument: "after",
    runValidators: true
    }
  );

}

export async function deletarEmpresaService(id) {

  return await Empresa.findByIdAndDelete(id);

}
