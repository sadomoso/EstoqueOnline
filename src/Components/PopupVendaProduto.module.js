import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    TextField,
    Button,
    Box,
    Typography,
} from "@mui/material";

import putRequisicao from "../Requisicoes/Put.Produto.Requisicao";

export default function PopupCadastroProdutos({ open, onClose, produtoSelecionado }) {


    const [quantidade, setQuantidade] = useState(0)
    const [nomeComprador, setNomeComprador] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [telefone, setTelefone] = useState(null)

    return (
        <Dialog id={'Vender'} open={open} onClose={onClose} fullScreen>
            <DialogTitle style={{ backgroundColor: "black", color: "white" }}>TALISMÃ DISTRIBUIDORA - Dados da Venda</DialogTitle>
            <DialogContent style={{ backgroundColor: "yellow" }}>
                {produtoSelecionado && (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: 'white', padding: '16px' }}>
                                <Typography variant="h6" gutterBottom>Detalhes do Produto</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body1"><strong>Nome do produto:</strong> {produtoSelecionado.NomeProduto}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body1"><strong>Estoque:</strong> {produtoSelecionado.Estoque}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body1"><strong>Valor unitário:</strong> R$ {produtoSelecionado.ValorBase}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ backgroundColor: "white" }}
                                onChange={(event) => setQuantidade(event.target.value)}
                                variant="outlined"
                                label="Quantidade a vender"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ backgroundColor: "white" }}
                                onChange={(event) => setNomeComprador(event.target.value)}
                                variant="outlined"
                                label="Nome do comprador"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ backgroundColor: "white" }}
                                onChange={(event) => setEndereco(event.target.value)}
                                variant="outlined"
                                label="Endereço"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ backgroundColor: "white" }}
                                onChange={(event) => setTelefone(event.target.value)}
                                variant="outlined"
                                label="Telefone de contato"
                                fullWidth
                            />

                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: 'white', padding: '16px' }}>
                                <Typography variant="body1"><strong>Valor total a pagar:</strong> R$ {produtoSelecionado.ValorBase * quantidade}</Typography>
                            </Box>
                        </Grid>





                    </Grid>
                )}
            </DialogContent>
            <DialogActions style={{ backgroundColor: "black" }}>
                <Button onClick={onClose} color="primary">
                    Cancelar
                </Button>
                <Button
                    onClick={() => putRequisicao(
                        produtoSelecionado.id,
                        produtoSelecionado.NomeProduto,
                        produtoSelecionado.ValorBase,
                        produtoSelecionado.Estoque,
                        produtoSelecionado.Descricao,
                        quantidade,
                        onClose,
                        nomeComprador,
                        endereco,
                        telefone
                    )}
                    color="primary"
                >
                    Confirmar Venda
                </Button>
            </DialogActions>
        </Dialog>
    )
}