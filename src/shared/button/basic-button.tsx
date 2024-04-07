import Button from '@mui/material/Button';

interface IButtonProps {
    disabled?: boolean,
    funcOnClick?: (event: any) => void,
    btnName: string
}

export default function BasicButton({disabled, funcOnClick, btnName}: IButtonProps) {
    return (
        <Button variant="contained"
                size="large"
                disabled={disabled}
                onClick={funcOnClick}>
            {btnName}
        </Button>
    )
}