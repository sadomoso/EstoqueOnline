import axios from "axios";

export default async function GetVendas() {
  try {
    const resposta = await axios.get(
      `http://localhost:4000/Registro-de-Vendas`
    );
    return resposta.data;
  } catch {
    console.log("Erro ao conectar ao banco de dados, registro de vendas");
  }
}
