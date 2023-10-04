import React, { useState } from "react";
import { Dialog, Button, Grid } from "@mui/material"; // Importe corretamente os componentes necessários
import PopupCadastroProduto from "./PopupCadastroProdutos.module";

export default function PopupMenuADM({ open, onClose }) {
    const [openPopUpCadastrar, setOpenPopUpCadastrar] = useState(false);

    const handleCadastrarClick = () => {
        setOpenPopUpCadastrar(true);
    }

    const handleClosePopup = () => {
        setOpenPopUpCadastrar(false);
        window.location.reload();
    };

    return (
        <Dialog id={'MenuADM'} open={open} onClose={onClose} >
            <Grid minWidth={'100%'} sx={{ backgroundColor: 'black' }} item xs={12} md={6} container justifyContent="end">
                
                <Button sx={{ color: 'white' }} onClick={handleCadastrarClick}>Cadastrar Produto</Button>
                <Button sx={{ color: 'white' }}>Registro de Vendas</Button>
                <Button sx={{ color: 'white' }}>Alterar Estoque</Button>


            </Grid>
            <PopupCadastroProduto
                open={openPopUpCadastrar}
                onClose={handleClosePopup}
            />
        </Dialog >
    )
}
