import axios from "axios";

export default async function putRequisicao(id, NomeProduto, ValorBase, Estoque, Descricao, quantidade) {
    try {
        const resposta = await axios.put(`http://localhost:4000/Produtos/${id}`, {
            id: id,
            NomeProduto: NomeProduto,
            ValorBase: ValorBase,
            Estoque: Estoque - quantidade,
            Descricao: Descricao


        });
        if (resposta.status === 200) {
            console.log('Produto atualizado com sucesso!');
        } else {
            console.log(id)
            console.log('Erro ao atualizar o produto.');
        }
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', id);
    }
}
