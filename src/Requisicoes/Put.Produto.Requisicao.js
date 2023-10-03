// Arquivo: Put.Requisicao.js

import axios from "axios";
import postRequisicao from "./Post.Registro.Requisicao";


export default async function putRequisicao(id, NomeProduto, ValorBase, Estoque, Descricao, quantidade, vendaConfirmadaCallback, nomeComprador, endereco, telefone) {
    try {
        const checagemDados = await axios.get(`http://localhost:4000/Produtos/${id}`);
        let validadorDeEstoque = checagemDados.data.Estoque
        validadorDeEstoque = validadorDeEstoque - quantidade

        if (validadorDeEstoque >= 0 && nomeComprador !== null && endereco !== null && telefone !== null) {
            try {
                const resposta = await axios.put(`http://localhost:4000/Produtos/${id}`, {
                    id: id,
                    NomeProduto: NomeProduto,
                    ValorBase: ValorBase,
                    Estoque: Estoque - quantidade,
                    Descricao: Descricao
                });

                if (resposta.status === 200) {
                    postRequisicao(NomeProduto, ValorBase, Descricao, quantidade, nomeComprador, endereco, telefone);
                    vendaConfirmadaCallback();
                } else {
                    alert('Dados inválidos');
                }

            } catch (error) {
                alert(`Erro ao conectar ao banco de dados: ${error.message}`);
            }
        } else {
            alert("Dados incorretos ou estoque insuficiente para venda!");
        }

    } catch (error) {
        alert(`Erro ao acessar o estoque: ${error.message}`);
    }
}
