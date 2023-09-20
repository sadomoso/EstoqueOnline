import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import requisicaoProdutos from "../Requisicoes/Produtos.Requisicao";
import ButtonP from '../Components/Button.module'

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const execucaoProdutos = async () => {
            try {
                const produtosData = await requisicaoProdutos();
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
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Box
                component="form"
                width="100vh"
                height="70vh"
                p={2}
                marginTop={"100px"}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius={"10px"}
                borderColor={"Grey"}
                sx={{ backgroundColor: "white" }}
                border={"4px solid"}
                boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            >
                <List sx={{
                    maxHeight: "calc(70vh - 40px)",
                    overflowY: "auto",
                }}>
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
                            <Typography sx={{ position: "absolute", top: "0.5vh", left: "45%" }}> Estoque: {produto.Estoque}</Typography>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ height:'3vh', widht: '4vh', position: 'absolute', right: '4vh', bottom: '0.5vh' }}
                                onClick={() => handleVenderClick(produto)}
                            >
                                Vender
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
