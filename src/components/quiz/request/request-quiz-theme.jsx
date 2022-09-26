import { Alert, CircularProgress, Select } from '@mui/material';
import QuizFormTheme from '../../../containers/quiz/quiz-form-theme';
import { useQuery } from '../../../hooks/useRequest';

const RequestQuizTheme = ({ themeID, theme, lock }) => {
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
		const themes = data.results;
		return <QuizFormTheme themes={themes} themeID={themeID} theme={(e)=>theme(e)} lock={lock} />;
	}
};

export default RequestQuizTheme;
