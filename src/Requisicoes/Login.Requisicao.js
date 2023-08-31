import { Alert } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function loginRequisicao(usuario, senha) {
    if (usuario === 'Felipe' && senha === '123') {
        return true; // Login bem-sucedido
    } else {
        return false; // Login não foi bem-sucedido
    }
}
