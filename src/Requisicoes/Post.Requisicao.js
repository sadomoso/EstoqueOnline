// Arquivo: Post.Requisicao.js

import axios from "axios";

export default async function postRequisicao(NomeProduto, ValorBase, Descricao, quantidade, nomeComprador, endereco, telefone) {
    let valorTotal = quantidade * ValorBase;
    try {
        const respostaRegistroVendas = await axios.post(`http://localhost:4000/Registro-de-Vendas`, {
            NomeComprador: nomeComprador,
            Endereco: endereco,
            Telefone: telefone,
            ValorTotal: valorTotal,
            NomeProduto: NomeProduto,
            ValorBase: ValorBase,
            Quantidade: quantidade,
            Descricao: Descricao
        });
        
        if (respostaRegistroVendas.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log("Deu errado o envio", error);
        return false;
    }
}
