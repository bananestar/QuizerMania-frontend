import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const QuizFormName = ({ quizName, error }) => {
	const [quiz, setQuiz] = useState(' ');
	const [errorMessageQuiz, setErrorMessageQuiz] = useState('');

	useEffect(() => {
		if (quiz.length <= 0) {
			setErrorMessageQuiz('quiz name is empty');
			error(true);
		}
		if (quiz.length > 0) {
			setErrorMessageQuiz('');
			quizName(quiz);
			error(false);
		}
	}, [quiz]);

	return (
		<>
			<h1>Création d'un Quiz</h1>
			<TextField
				id="field1"
				label="Nom du quiz"
				margin="dense"
				variant="filled"
				helperText={errorMessageQuiz}
				error={errorMessageQuiz.length > 0}
				onChange={({ target }) => setQuiz(target.value)}
			/>
		</>
	);
};
export default QuizFormName;
