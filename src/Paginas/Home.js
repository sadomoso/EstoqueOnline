import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Grid, TextField } from "@mui/material";

import GetProdutos from "../Requisicoes/Get.Requisicao";
import ButtonP from '../Components/Button.module'
import TextFieldP from "../Components/TextField.module";
import putRequisicao from "../Requisicoes/Put.Requisicao";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [openPopup, setOpenPopup] = useState(false); // Estado para controlar a exibição do popup
    const [produtoSelecionado, setProdutoSelecionado] = useState(null); // Estado para armazenar o produto selecionado
    const [quantidade, setQuantidade] = useState(0)
    const [nomeComprador, setNomeComprador] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [telefone, setTelefone] = useState(null)

    useEffect(() => {
        const execucaoProdutos = async () => {
            try {
                const produtosData = await GetProdutos();
                if (produtosData) {
                    setProdutos(produtosData);
                } else {
                    console.log("Não há produtos");
                }
            } catch (error) {
                console.log("Erro ao receber produtos:", error);
            }
        };

        execucaoProdutos();
    }, []);

    const handleVenderClick = (produto) => {
        // Lógica para vender o produto
        console.log(`Vendido: ${produto.NomeProduto}`);
        setProdutoSelecionado(produto); // Define o produto selecionado
        setOpenPopup(true); // Abre o popup
    };

    const handleClosePopup = () => {
        setOpenPopup(false); // Fecha o popup
        window.location.reload();  // Atualiza a página
      };
      

    return (
        <Grid marginTop={4} container justifyContent="center" alignItems="center" height="100vh">
            <Grid item xs={12} sm={6} md={4}>
                <Box
                    maxwidth={'80vh'}
                    component="form"
                    p={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    borderRadius={2}
                    borderColor="Grey"
                    sx={{ backgroundColor: "white" }}
                    border="3px solid"
                    boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
                >
                    <List sx={{ maxHeight: "calc(70vh - 40px)", overflowY: "auto" }}>
                        {produtos.map((produto, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    height: "10vh",
                                    padding: "1px",
                                    borderRadius: "2px",
                                    border: "1px solid",
                                    borderColor: "black",
                                    marginBottom: '2vh',
                                    position: "relative",
                                }}
                            >
                                <Typography sx={{ position: "absolute", bottom: "0.5vh", left: "4vh" }}>Codigo: {produto.id}</Typography>
                                <Typography sx={{ position: "absolute", top: "0.5vh", left: "4vh" }}>{produto.NomeProduto}</Typography>
                                <Typography sx={{ position: "absolute", top: "0.5vh", right: "4vh", }}> R$: {produto.ValorBase}</Typography>
                                <Typography sx={{ position: "absolute", top: "0.5vh", left: "40%" }}> Estoque: {produto.Estoque}</Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ height: '3vh', width: '4vh', position: 'absolute', right: '4vh', bottom: '0.5vh' }}
                                    onClick={() => handleVenderClick(produto)}
                                >
                                    Vender
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>

            {/* Popup para confirmar a venda */}
            <Dialog open={openPopup} onClose={handleClosePopup} fullScreen>
                <DialogTitle style={{ backgroundColor: "black", color: "white" }}>Dados da Venda</DialogTitle>
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
                    <Button onClick={handleClosePopup} color="primary">
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
                            handleClosePopup,
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

        </Grid >
    );
}
