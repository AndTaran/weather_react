import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {ChangeEvent} from "react";

interface ISearchInputProps {
    value: string,
    handleFuncChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleKeyPress?: (event: any) => void,
    placeholder: string
}

export default function InputSearch({value, handleFuncChange, handleKeyPress, placeholder}: ISearchInputProps) {
    return (
        <Box>
            <TextField id="outlined-basic"
                       size="small"
                       placeholder={placeholder}
                       value={value}
                       onChange={handleFuncChange}
                       onKeyDown={handleKeyPress}
                       label='Город'/>
        </Box>
    )
}