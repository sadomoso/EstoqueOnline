import axios from "axios";

export default async function PostCadastroProdutoRequisicao(nomeCadastroProdut, valorCadastroProduto, estoqueCadastroProduto, descricaoCadastroProduto, cadastroConfirmadaCallback) {
    if (nomeCadastroProdut !== null && valorCadastroProduto !== null && descricaoCadastroProduto !== null && estoqueCadastroProduto !== null) {
        try {
            const respostaRegistroProduto = await axios.post(`http://localhost:4000/Produtos`, {
                NomeProduto: nomeCadastroProdut,
                ValorBase: valorCadastroProduto,
                Estoque: estoqueCadastroProduto,
                Descricao: descricaoCadastroProduto
            });
            if (respostaRegistroProduto.status === 201) {
                cadastroConfirmadaCallback();
                return true;

            } else {
                return false;
            }
        }
        catch
        {

            alert("Não foi possivel realizar o registro do produto, contate o suporte!");
            return false;

        }
    }
    else {
        console.log("nada ok")
    }
}