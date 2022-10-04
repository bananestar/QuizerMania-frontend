import { Alert, CircularProgress } from '@mui/material';
import { useDeleted } from '../../../../hooks/useRequest';

const RequestQuizDeleted = ({ quizID }) => {
	const URL_QUIZ = import.meta.env.VITE_API_QUIZ;

	if (quizID) {
		const { data, isLoading, errors } = useDeleted(URL_QUIZ, quizID);

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
			window.location.reload();
		}
	}
};

export default RequestQuizDeleted;
