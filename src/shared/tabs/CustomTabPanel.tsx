import React from "react";
import Box from "@mui/material/Box";

interface ICustomTabPanelProps {
    children: React.JSX.Element,
    value: string,
    index: string
}

export default function CustomTabPanel(props: ICustomTabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box m={3} display="flex" justifyContent="center">
                    {children}
                </Box>
            )}
        </Box>
    );
}