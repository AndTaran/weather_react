import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ITitle {
	title: string;
}

export default function MainTitle({ title }: ITitle) {
	return (
		<Box
			textAlign='center'
			data-testid='main-title'
		>
			<Typography
				variant='h5'
				p={2}
			>
				{title}
			</Typography>
		</Box>
	);
}
