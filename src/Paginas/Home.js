import React from "react";
import { Box, Toolbar, IconButton, AppBar, Typography, Button } from "@mui/material";
import TextFieldP from "../Components/TextField.module";
import ButtonP from "../Components/Button.module"

export default function Home() {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
            <Box
                 component='form'
                 width='40vh'
                 height='70vh'
                 p={2}
                 marginTop={'100px'}
                 display='flex'
                 flexDirection='column'
                 alignItems='center'
                 justifyContent='center'
                 borderRadius={'10px'}
                 borderColor={'Grey'}
                 sx={{ backgroundColor: 'white' }}
                 border={'4px solid'}
                 boxShadow='0px 3px 6px rgba(0, 0, 0, 0.16)'>
                    <Typography>CADASTRAR</Typography>
                    <TextFieldP propsTexto={{ Texto: "Usuario" }} propsType={{ Type: 'text' }}></TextFieldP>  
                    <TextFieldP propsTexto={{ Texto: "Email" }} propsType={{ Type: 'email' }}></TextFieldP>  
                    <TextFieldP propsTexto={{ Texto: "CNPJ" }} propsType={{ Type: 'text' }}></TextFieldP> 
                    <TextFieldP propsTexto={{ Texto: "Senha" }} propsType={{ Type: 'password' }}></TextFieldP>  
                    <TextFieldP propsTexto={{ Texto: "Confirmação da senha" }} propsType={{ Type: 'password' }}></TextFieldP>   
                    <ButtonP Texto='Confirmar' />
                 </Box>
        </Box>
    );
}
