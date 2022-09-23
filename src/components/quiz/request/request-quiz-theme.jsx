import { Alert, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useQuery } from '../../../hooks/useRequest';

const RequestQuizTheme = ({ theme }) => {
	const [themeSelected, setThemeSelected] = useState();
	const url = import.meta.env.VITE_API_THEME;

	const { data, isLoading, errors } = useQuery(url);

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
		theme(data.results);
	}
};

export default RequestQuizTheme;
