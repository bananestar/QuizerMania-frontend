import { Alert, CircularProgress } from '@mui/material';
import { useUpdatedQuiz } from '../../../../hooks/useRequest';

const RequestQuizUpdated = ({ quiz }) => {
	const url = import.meta.env.VITE_API_QUIZ + 'updatedQuiz';

	const { data, isLoading, errors } = useUpdatedQuiz(quiz,quiz.quizID);

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

    return <></>;
};

export default RequestQuizUpdated;
