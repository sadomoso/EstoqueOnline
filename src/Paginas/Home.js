import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, Typography, Grid, IconButton } from "@mui/material";
import GetProdutos from "../Requisicoes/Get.Produto.Requisicao";
import AddIcon from '@mui/icons-material/Add';
import PopupCadastroProduto from "../Components/PopupCadastroProdutos.module";
import PopupVendasProdutos from "../Components/PopupVendaProduto.module";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [openPopUpCadastrar, setOpenPopUpCadastrar] = useState(false);

    useEffect(() => {
        const execucaoProdutos = async () => {
            try {
                const produtosData = await GetProdutos();
                if (produtosData) {
                    setProdutos(produtosData);
                }
            } catch (error) {
                console.log("Erro ao receber produtos:", error);
            }
        };

        execucaoProdutos();
    }, []);

    const handleVenderClick = (produto) => {
        setProdutoSelecionado(produto);
        setOpenPopup(true);
    };

    const handleCadastrarClick = () => {
        setOpenPopUpCadastrar(true);
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
        setOpenPopUpCadastrar(false);
        window.location.reload();
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
                    <IconButton color="primary" aria-label="Adicionar" onClick={handleCadastrarClick}>
                        <AddIcon />
                    </IconButton>
                </Box>
            </Grid>

            <PopupVendasProdutos open={openPopup} onClose={handleClosePopup} produtoSelecionado={produtoSelecionado} />

            <PopupCadastroProduto
                open={openPopUpCadastrar}
                onClose={handleClosePopup}
            />
        </Grid>
    );
}
