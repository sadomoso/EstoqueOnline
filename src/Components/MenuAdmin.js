import { Grid, Toolbar, AppBar, Typography, IconButton, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import React, { useEffect, useState } from "react";
import PopupMenuADM from "./PopupMenuADM.module";
export default function MenuAdmin() {

    const [openPopUpMenuADM, setOpenPopUpMenuADM] = useState(false);

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
                    <Grid item xs={12} md={6} marginY={1}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h4' display="inline-flex">TALISMÃ DISTRIBUIDORA</Typography>
                            <IconButton onClick={handleMenuClick} color="primary" aria-label="Adicionar" sx={{ marginLeft: 'auto' }}>
                                <AddIcon />
                            </IconButton>
                        </div>
                    </Grid>

                </Grid>
            </Toolbar>
            <PopupMenuADM open={openPopUpMenuADM} onClose={handleClosePopup} />
        </AppBar>
    )
}
