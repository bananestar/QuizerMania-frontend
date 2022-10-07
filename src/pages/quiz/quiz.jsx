import {
	Alert,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import QuizCard from '../../containers/quiz/game/quiz-card';
import { useQuery } from '../../hooks/useRequest';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import DisplayQuiz from '../../containers/quiz/display/quiz-display';


const QuizPage = () => {
	const navigate = useNavigate();
	const URL = import.meta.env.VITE_API_QUIZ;
	const { data, isLoading, errors } = useQuery(URL);

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
		const quiz = data.results;

		if (quiz === undefined) {
			navigate('/404');
		}

		return (
			<DisplayQuiz quiz={quiz} />
		);
	}
};
export default QuizPage;

// QuizCard
