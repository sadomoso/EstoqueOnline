import React from 'react';
import Button from "@mui/material/Button";

export default function ButtonP({ Texto, propsFunciton}) {
    return (
        <Button variant='outlined' onClick={propsFunciton} sx={{ my: 1 }}>
            {Texto}
        </Button>
    );
}
