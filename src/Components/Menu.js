import React from "react";
import { Box, Toolbar, AppBar, Typography, Button } from "@mui/material";

export default function Menu(){
    return (
        <AppBar sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Typography padding={2} variant='h3' display="inline-flex">ESTOQUE</Typography>
                <Box sx={{ flexGrow: 1 }} /> {/* Espaço flexível para empurrar o botão para a direita */}
                <Button variant='h5' display="inline-flex">CADASTRAR</Button>
                <Button variant='h5' display="inline-flex">ACESSAR</Button>
            </Toolbar>
        </AppBar>
    )
}