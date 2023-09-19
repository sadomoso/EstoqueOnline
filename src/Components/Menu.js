import React from "react";
import { Box, Toolbar, IconButton, AppBar, Typography, Button } from "@mui/material";

export default function Menu(){
    return (
        <AppBar sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Typography padding={2} variant='h3' display="inline-flex">Logo</Typography>
                <Box sx={{ flexGrow: 1 }} /> {/* Espaço flexível para empurrar o botão para a direita */}
                <Button marginTop={2} marginLeft={3} variant='h5' display="inline-flex">CADASTRAR</Button>
                <Button marginTop={2} marginLeft={3} variant='h5' display="inline-flex">Logar</Button>
            </Toolbar>
        </AppBar>
    )
}