import { Alert, Box } from "@mui/material"
import ButtonP from "../Components/Button.module"
import loginRequisicao from "../Requisicoes/Login.Requisicao";
import React, { useState } from "react";
import TextFieldP from "../Components/TextField.module";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [usuario, setUsuario] = useState(""); // Estado para armazenar o usuário
    const [senha, setSenha] = useState(""); // Estado para armazenar a senha
    const navigate = useNavigate();

    const handleLogin = () => {
        setUsuario(usuario)
        setSenha(senha)
        // Aqui você pode acessar os valores de usuário e senha
        const loginsucesso = loginRequisicao(usuario, senha);
        if (loginsucesso == true) {
            navigate("/Home");
        }
        else {
            alert('Login ou Senha incorretos')
        }

        // Chama a função de requisição de login
    };

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
            <Box
                component='form'
                width='40vh'
                height='300px'
                p={2}
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                borderRadius={'10px'}
                borderColor={'Grey'}
                sx={{ backgroundColor: 'white' }}
                border={'4px solid'}
                boxShadow='0px 3px 6px rgba(0, 0, 0, 0.16)'
            // Remova a margem superior da primeira Box
            >
                <h1>Loguin</h1>
                <TextFieldP propsTexto={{ Texto: "Usuario" }} propsType={{ Type: 'text' }} propsOnChange={(e) => setUsuario(e.target.value)} ></TextFieldP>

                <TextFieldP propsTexto={{ Texto: 'Senha' }} propsType={{ Type: 'Password' }} propsOnChange={(e) => setSenha(e.target.value)}></TextFieldP>
                <ButtonP Texto='Confirmar' propsFunciton={handleLogin} />
            </Box>
        </Box>
    )
}