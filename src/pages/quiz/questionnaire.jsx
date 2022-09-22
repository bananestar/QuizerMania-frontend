import { Alert, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizCardQuestion from '../../containers/quiz/quiz-card-question';
import { useQuery } from '../../hooks/useRequest';

const QuestionnairePage = () => {
	const { quizID } = useParams();
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
        const quiz = data.result[0]
        const questions = quiz.questions
		return <Box align={'center'} >
            <QuizCardQuestion questions={questions} quiz={quiz} />
        </Box>;
	}
};
export default QuestionnairePage;
