import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { jwtAtom } from '../../atoms/jwtAtom';
import QuizCardQuestion from '../../containers/quiz/quiz-card-question';
import { useQuery } from '../../hooks/useRequest';

const QuestionnairePage = () => {
	const { quizID } = useParams();
	const URL = import.meta.env.VITE_API_QUIZ + 'allQuestionQuiz/';
	const [token, setToken] = useRecoilState(jwtAtom);

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

	if (!token) {
		return (
			<Box align={'center'}>
				<h1>Vous devez être connecter</h1>
				<Button component={Link} to='/registration' variant="contained">
					Sign Up
				</Button>
				&nbsp; &nbsp; &nbsp;
				<Button component={Link} to='/login' variant="contained">
					Login
				</Button>
			</Box>
		);
	}

	if (data) {
		const quiz = data.result[0];
		const questions = quiz.questions;
		return (
			<Box align={'center'}>
				<QuizCardQuestion questions={questions} quiz={quiz} />
			</Box>
		);
	}
};
export default QuestionnairePage;
