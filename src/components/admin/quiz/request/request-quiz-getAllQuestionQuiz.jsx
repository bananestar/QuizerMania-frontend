import { Alert, CircularProgress } from '@mui/material';
import { useQuery } from '../../../../hooks/useRequest';


const RequestQuizGetAllQuestionQuiz = ({ quizID, dt }) => {
	const URL = import.meta.env.VITE_API_QUIZ + 'allQuestionQuiz/';
	const { data, isLoading, errors } = useQuery(URL, quizID);

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
		dt(data);
	}
};

export default RequestQuizGetAllQuestionQuiz;
