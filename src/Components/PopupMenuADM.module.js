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
        <Dialog id={'MenuADM'} open={open} onClose={onClose}>
            <Grid item xs={12} md={6} container justifyContent="end">
                <Button onClick={handleCadastrarClick}>Cadastrar Produto</Button>
                <Button>Registro de Vendas</Button>
                <Button>Alterar Estoque</Button>

                <PopupCadastroProduto
                    open={openPopUpCadastrar}
                    onClose={handleClosePopup}
                />
            </Grid>
        </Dialog >
    )
}
