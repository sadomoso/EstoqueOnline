import axios from "axios";

export default async function putRequisicao(id, NomeProduto, ValorBase, Estoque, Descricao, quantidade, vendaConfirmadaCallback, nomeComprador, endereco, telefone) {
    try {
        const resposta = await axios.put(`http://localhost:4000/Produtos/${id}`, {
            id: id,
            NomeProduto: NomeProduto,
            ValorBase: ValorBase,
            Estoque: Estoque - quantidade,
            Descricao: Descricao
        

        });
        if (resposta.status === 200 && quantidade > 0) {
            console.log('Produto atualizado com sucesso!');
            vendaConfirmadaCallback();
        } else {
            console.log(id)
            alert('Dados invalidos');
        }
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', id);
    }
}
