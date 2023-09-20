import { Box } from "@mui/material";
import ButtonP from "../Components/Button.module";
import loginRequisicao from "../Requisicoes/Login.Requisicao";
import React, { useState } from "react";
import TextFieldP from "../Components/TextField.module";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Chama a função de requisição de login de forma assíncrona
      const loginsucesso = await loginRequisicao(usuario, senha);

      if (loginsucesso === true) {
        navigate("/Home");
        console.log("chegou aqui");
      } else {
        alert("Usuário ou Senha incorretos");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login"); // Trate o erro de login de acordo com suas necessidades
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
        <TextFieldP
          propsTexto={{ Texto: "Usuario" }}
          propsType={{ Type: "text" }}
          propsOnChange={(e) => setUsuario(e.target.value)}
        ></TextFieldP>

        <TextFieldP
          propsTexto={{ Texto: "Senha" }}
          propsType={{ Type: "Password" }}
          propsOnChange={(e) => setSenha(e.target.value)}
        ></TextFieldP>
        <ButtonP Texto="Confirmar" propsFunciton={handleLogin} />
      </Box>
    </Box>
  );
}
