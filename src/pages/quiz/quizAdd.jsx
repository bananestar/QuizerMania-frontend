import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import QuizForm from '../../containers/quiz/quiz-form';
import QuizTableQuestion from '../../containers/quiz/quiz-table-question';

const QuizAddPage = () => {
	const [quizName, setQuizName] = useState('');
	const [errors, setErrors] = useState('');
	useEffect(() => {
		console.log(quizName);
	}, [quizName]);
	return (
		<Box sx={{ marginLeft: 30, flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<QuizForm quizName={(e) => setQuizName(e)} error={(e) => setErrors(e)} />
				</Grid>
				<Grid item xs={8}>
					<QuizTableQuestion />
				</Grid>
			</Grid>
		</Box>
	);
};
export default QuizAddPage;
