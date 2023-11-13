import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    TextField,
    Button,
} from "@mui/material";

import PostCadastroProdutoRequisicao from "../Requisicoes/Post.Cadastro.Produto.Requisicao";

export default function PopupCadastroProduto({ open, onClose }) { // Correção aqui

    const [nomeCadastroProduto, setNomeCadastroProduto] = useState(null)
    const [estoqueCadastroProduto, setEstoqueCadastroProduto] = useState(null)
    const [descricaoCadastroProduto, setDescricaoCadastroProduto] = useState(null)
    const [valorCadastroProduto, setValorCadastroproduto] = useState(null)


    return (
        <Dialog id={"Cadastar"} open={open} onClose={onClose} fullScreen>
            <DialogTitle style={{ backgroundColor: "black", color: "white" }}>TALISMÃ DISTRIBUIDORA - Cadastro de produtos</DialogTitle>
            <DialogContent style={{ backgroundColor: "yellow" }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ backgroundColor: "white" }}
                            onChange={(event) => setNomeCadastroProduto(event.target.value)}
                            variant="outlined"
                            label="Nome do produto"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ backgroundColor: "white" }}
                            onChange={(event) => setValorCadastroproduto(event.target.value)}
                            variant="outlined"
                            label="Valor do produto"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ backgroundColor: "white" }}
                            onChange={(event) => setDescricaoCadastroProduto(event.target.value)}
                            variant="outlined"
                            label="Descrição do produto"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ backgroundColor: "white" }}
                            onChange={(event) => setEstoqueCadastroProduto(event.target.value)}
                            variant="outlined"
                            label="Estoque"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions style={{ backgroundColor: "black" }}>
                <Button onClick={onClose} color="primary">
                    Cancelar
                </Button>
                <Button
                    onClick={() => PostCadastroProdutoRequisicao(
                        nomeCadastroProduto,
                        valorCadastroProduto,
                        estoqueCadastroProduto,
                        descricaoCadastroProduto,
                        onClose)}
                    color="primary"
                >
                    Cadastrar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
