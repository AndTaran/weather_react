import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {ChangeEvent} from "react";

interface IInputProps {
    value: string,
    handleFuncChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleKeyPress?: (event: any) => void,
    placeholder: string,
    label?: string,
    name?: string
    type?: string
    autoComplete?: string
}

export default function BasicInput({
                                       value,
                                       handleFuncChange,
                                       handleKeyPress,
                                       placeholder,
                                       ...restProps
                                   }: IInputProps) {

    return (
        <Box>
            <TextField id="outlined-basic"
                       size="small"
                       placeholder={placeholder}
                       value={value}
                       onChange={handleFuncChange}
                       onKeyDown={handleKeyPress}
                       {...restProps}
            />
        </Box>
    )
}