import React from "react";
import { Box, Toolbar, IconButton, AppBar, Typography, Button } from "@mui/material";
import axios from "axios";
import ButtonP from "../Components/Button.module"
import requisicaoProdutos from "../Requisicoes/Produtos.Requisicao";

const execucaoProdutos = async () =>{
    
}

export default function Home() {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
            <Box
                 component='form'
                 width='100vh'
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
                    <ButtonP Texto={'Teste'} propsFunciton={execucaoProdutos}/>
                 </Box>
        </Box>
    );
}
