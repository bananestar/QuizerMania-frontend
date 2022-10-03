import { Alert, CircularProgress } from '@mui/material';
import { useQuery } from '../../../../hooks/useRequest';

const RequestQuizGetTheme = ({ themeID }) => {
	const url = import.meta.env.VITE_API_THEME;

	const { data, isLoading, errors } = useQuery(url, themeID);

	if (isLoading) {
		return <CircularProgress />;
	}

	if (errors) {
		console.error('-------------ERROR------------');
		console.error(errors);
		console.error('-------------ERROR------------');
		return (
			<Alert margin="dense" severity="error">
				{errors}
			</Alert>
		);
	}

	if (data) {
		const theme = data.result.name;
		// console.log(theme);
		return <>{ theme }</>;
	}
};

export default RequestQuizGetTheme;
