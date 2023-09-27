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
                <DialogContent style={{ backgroundColor: "yellow" }} >
                    {produtoSelecionado && (
                        <Box sx={{ backgroundColor: 'white', height: '60vh', marginY: '10vh', padding: '2vh' }}  >
                            <Box display="flex" justifyContent="space-between" alignItems="center" height="10vh" fullWidth>
                                <Typography>Nome do produto: {produtoSelecionado.NomeProduto}</Typography>
                                <Typography>Estoque: {produtoSelecionado.Estoque}</Typography>
                                <Typography>Valor unitário R$: {produtoSelecionado.ValorBase}</Typography>
                            </Box>
                            <Box display='flex' justifyContent="space-between" fullWidth>
                                <TextField sx={{ backgroundColor: "white"}} onChange={(event) => setQuantidade(event.target.value)} variant={'outlined'} label={'Quantidade a vender'} width={'2'}></TextField>
                                <TextField sx={{ backgroundColor: "white" }} variant={'outlined'} label={'Nome do comprador'} width={'auto'}></TextField>
                                <TextField sx={{ backgroundColor: "white" }} variant={'outlined'} label={'Sobrenome do comprador'} width={'auto'}></TextField>
                                <TextField sx={{ backgroundColor: "white" }} variant={'outlined'} label={'CPF ou CNPJ do comprador'} width={'auto'}></TextField>
                                <TextField sx={{ backgroundColor: "white" }} variant={'outlined'} label={'Telefone de contato'} width={'auto'}></TextField>

                            </Box>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions style={{ backgroundColor: "black" }}>
                    <Button onClick={handleClosePopup} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => putRequisicao(produtoSelecionado.id, produtoSelecionado.NomeProduto, produtoSelecionado.ValorBase, produtoSelecionado.Estoque, produtoSelecionado.Descricao, quantidade)} color="primary">
                        Confirmar Venda
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
