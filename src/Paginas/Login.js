import { Box, TextField, Button } from "@mui/material";
import loginRequisicao from "../Requisicoes/Login.Requisicao";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Chama a função de requisição de login de forma assíncrona
      const loginsucesso = await loginRequisicao(usuario, senha);
      console.log(loginsucesso)
      if (loginsucesso === true) {
        navigate("/Home");
      } else {
        alert("Usuário ou Senha incorretos");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        component="form"
        width="40vh"
        height="300px"
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius={"10px"}
        borderColor={"Grey"}
        sx={{ backgroundColor: "white" }}
        border={"4px solid"}
        boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
      >
        <h1>Login</h1>
        <TextField
          label={"Usuario"}
          type={'text'} // Correção aqui
          onChange={(e) => setUsuario(e.target.value)}
          variant="outlined"
          sx={{ p: 0, my: 2, justifyContent: 'center', alignItems: 'center' }}
        />

        <TextField
          label={"Senha"}
          type={'password'} // Correção aqui
          onChange={(e) => setSenha(e.target.value)}
          variant="outlined"
          sx={{ p: 0, my: 2, justifyContent: 'center', alignItems: 'center' }}
        />
        <Button variant='outlined' onClick={handleLogin} sx={{ my: 1 }}>
          {"Confirmar"}
        </Button>
      </Box>
    </Box>
  );
}
