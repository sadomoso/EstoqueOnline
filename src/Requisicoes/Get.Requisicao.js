import axios from "axios";

export default async function GetProdutos(){
    try{
        const resposta = await axios.get(`http://localhost:4000/Produtos`);
        return resposta.data
    }
    catch{
        console.log('Erro ao conectar ao banco de dados')
    }
}