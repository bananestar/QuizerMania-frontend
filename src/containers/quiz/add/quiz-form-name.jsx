import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const QuizFormName = ({ quizName, error, control }) => {
	const [quiz, setQuiz] = useState(' ');
	const [security, setSecurity] = useState(true);
	const [errorMessageQuiz, setErrorMessageQuiz] = useState('');

	useEffect(() => {
		if (quiz.length <= 0) {
			setErrorMessageQuiz('the field is empty');
			error(true);
			setSecurity(true);
		}
		if (quiz.length > 0) {
			setErrorMessageQuiz('');
			quizName(quiz);
			error(false);
			setSecurity(false);
		}
	}, [quiz]);

	useEffect(() => {
		control(security);
	}, [security]);

	return (
		<>
			<h1>Creation of a Quiz</h1>
			<TextField
				id="field1"
				label="Quiz name"
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
