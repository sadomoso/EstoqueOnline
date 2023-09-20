import axios from "axios";

export default async function requisicaoProdutos(){
    try{
        const resposta = await axios.get(`http://localhost:4000/Produtos`);
        return resposta.data
    }
    catch{
        console.log('Erro ao conectar ao banco de dados')
    }
}