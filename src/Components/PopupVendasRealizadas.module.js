import GetVendas from "../Requisicoes/Get.VendasRealizadas.Requisicao";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";

export default function PopupVendasRealizadas({ open, onClose }) {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vendasData = await GetVendas();
        console.log("Dados da API:", vendasData);

        // Verifique se a chave "Registro-de-Vendas" existe
        if (Array.isArray(vendasData) && vendasData.length > 0) {
          setVendas(vendasData);
        } else {
          console.warn("Array de vendas vazio ou inválido nos dados da API.");
        }
      } catch (error) {
        console.error("Erro ao obter dados de vendas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Dialog id={"RegistroDeVendas"} open={open} onClose={onClose} fullScreen>
      <DialogTitle style={{ backgroundColor: "black", color: "white" }}>
        TALISMÃ DISTRIBUIDORA - Dados das Vendas
      </DialogTitle>
      <DialogContent style={{ backgroundColor: "yellow" }}>
        {vendas && vendas.length > 0 ? (
          vendas.map((venda, index) => (
            <Box key={index} sx={{ backgroundColor: "white", padding: "16px", marginBottom: "16px" }}>
              <Typography variant="h6">Venda #{index + 1}</Typography>
              <Divider sx={{ marginY: "8px" }} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Nome do Comprador:</strong> {venda.NomeComprador}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Endereço:</strong> {venda.Endereco}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Telefone:</strong> {venda.Telefone}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Valor Total:</strong> R$ {venda.ValorTotal}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Nome do Produto:</strong> {venda.NomeProduto}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Quantidade Vendida:</strong> {venda.Quantidade}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Valor da Unidade:</strong> R$ {venda.ValorBase}
                  </Typography>
                  {/* Adicione mais informações conforme necessário */}
                </Grid>
              </Grid>
            </Box>
          ))
        ) : (
          <Typography>Nenhuma venda encontrada.</Typography>
        )}
      </DialogContent>
      <DialogActions style={{ backgroundColor: "black" }}>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
