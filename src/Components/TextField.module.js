import React from "react";
import { TextField } from "@mui/material";

export default function TextFieldP({ propsTexto, propsType, propsOnChange }) {
    const { Texto } = propsTexto;
    const { Type } = propsType;

    return (
        <TextField
            label={Texto}
            type={Type}
            
            onChange={propsOnChange}
            variant="outlined"
            sx={{ p: 0, my: 2, justifyContent: 'center', alignItems: 'center' }}
        />
    );
}
