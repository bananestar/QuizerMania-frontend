import { Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import ScoreDisplayQuiz from '../../containers/score/score-display-quiz';
import { useQuery } from '../../hooks/useRequest';

const ScoreByQuiz = () => {
	const { quizID } = useParams();
	const URL = import.meta.env.VITE_API_SCORE + 'byQuiz/';

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
		return (
			<Box align={'center'} sx={{ marginLeft: 30, width: '50%' }}>
				<ScoreDisplayQuiz data={data} />{' '}
			</Box>
		);
	}
};

export default ScoreByQuiz;
