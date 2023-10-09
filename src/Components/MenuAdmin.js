import { Grid, Toolbar, AppBar, Typography, IconButton, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import React, { useEffect, useState } from "react";
import PopupMenuADM from "./PopupMenuADM.module";
export default function MenuAdmin() {

    const [openPopUpMenuADM, setOpenPopUpMenuADM] = useState(false);
    const isAdmin = false;

    const handleMenuClick = () => {
        setOpenPopUpMenuADM(true);
    }

    const handleClosePopup = () => {
        setOpenPopUpMenuADM(false);
        window.location.reload();
    };


    return (
        <AppBar sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid minWidth={'100%'} item xs={12} md={6} marginY={1}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h4' display="inline-flex">TALISMÃ DISTRIBUIDORA</Typography>
                            {isAdmin && ( // Renderiza o ícone do botão somente se isAdmin for true
                                <IconButton onClick={handleMenuClick} color="primary" aria-label="Adicionar" sx={{ marginLeft: 'auto' }}>
                                    <AddIcon />
                                </IconButton>
                            )}
                        </Box>
                    </Grid>

                </Grid>
            </Toolbar>
            <PopupMenuADM open={openPopUpMenuADM} onClose={handleClosePopup} />
        </AppBar>
    )
}
