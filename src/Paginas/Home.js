import React from "react";
import { Box, Toolbar, IconButton, AppBar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";

export default function Home() {
    return (
        <Box>
            <AppBar sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton size="larger" sx={{ p: 2 }} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography padding={2} variant='h3' display="inline-flex">Logo</Typography>
                    <Typography marginTop={2} marginLeft={3} variant='h6' display="inline-flex">CADASTRAR</Typography>
                    <Typography marginTop={2} marginLeft={3} variant='h6' display="inline-flex">SACAR</Typography>

                    <Box sx={{ flexGrow: 1 }} /> {/* Espaço flexível para empurrar o botão para a direita */}
                    <Box>
                        <Typography padding={2} variant='h7' display="inline-flex">SALDO: R$</Typography>
                        <Typography variant='h7' display="inline-flex">0,00</Typography>
                    </Box>
                    <Button color="inherit"><AccountCircle sx={{fontSize:'2rem'}} /></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
