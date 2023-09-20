import axios from "axios";

export default async function loginRequisicao(usuario, senha) {
    try {
        const resposta = await axios.get(`http://localhost:4000/Contas?Usuario=${usuario}&Senha=${senha}`);
        if (resposta.data.length > 0) {
            // Usuário e senha válidos
            return true;
        } else {
            // Usuário ou senha inválidos
            return false;
        }
    }
    catch (error) {
        console.log("conexão falhou!");
    }

}
