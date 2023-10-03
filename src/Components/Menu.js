import React from "react";
import { Grid, Toolbar, AppBar, Typography } from "@mui/material";

export default function Menu() {
  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} marginY={1}>
            <Typography variant='h4' display="inline-flex">TALISMÃ DISTRIBUIDORA</Typography>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="flex-end">
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
