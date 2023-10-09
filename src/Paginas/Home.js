import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, Typography, Grid, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import PopupCadastroProduto from "../Components/PopupCadastroProdutos.module";
import PopupVendasProdutos from "../Components/PopupVendaProduto.module";
import GetProdutos from '../Requisicoes/Get.Produto.Requisicao';

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
            <Grid item xs={12} sm={10} md={8} lg={6}>
                <Box
                    component="form"
                    p={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    borderRadius={2}
                    borderColor="Grey"
                    sx={{
                        backgroundColor: "white",
                        border: "3px solid",
                        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                        width: "100%",
                        maxWidth: "800px",
                        margin: "0 auto",
                        padding: "16px",
                        '@media (max-width: 768px)': {
                            maxWidth: "90%", // Reduzindo a largura para telas menores
                        },
                    }}
                >
                    <List sx={{ maxHeight: "50vh", overflowY: "auto" }}>
                        {produtos.map((produto, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                                    marginBottom: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                    transition: "background-color 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "#e0e0e0",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>{produto.NomeProduto}</Typography>
                                <Typography >Código: {produto.id}</Typography>
                                <Typography>Estoque: {produto.Estoque}</Typography>
                                <Typography sx={{ fontWeight: "bold", marginTop: "8px" }}>R$ {produto.ValorBase}</Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#4caf50",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#45a049",
                                        },
                                        marginTop: "12px",
                                    }}
                                    onClick={() => handleVenderClick(produto)}
                                >
                                    Vender
                                </Button>
                            </ListItem>
                        ))}
                    </List>

                </Box>
            </Grid>
            <PopupVendasProdutos open={openPopup}
                onClose={handleClosePopup}
                produtoSelecionado={produtoSelecionado}
            />
            <PopupCadastroProduto
                open={openPopUpCadastrar}
                onClose={handleClosePopup}
            />
        </Grid>
    );
}
