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
        console.log(respostaRegistroVendas.status)
        if (respostaRegistroVendas.status === 201) {
            console.log('Sucesso ao enviar a solicitação');
            return true;
        } else {
            console.log('Erro ao enviar a solicitação');
            return false;
        }
    } catch (error) {
        console.error("Erro ao fazer a solicitação:", error);
        throw error; // Propaga o erro para a função que chama esta função
    }
}
