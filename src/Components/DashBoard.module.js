import React from "react";
import { Menu, MenuItem } from "@mui/material";

export default function DashboardMenu() {
    return (
        <Menu
            id="dashboard-menu"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
        </Menu>
    );
}
