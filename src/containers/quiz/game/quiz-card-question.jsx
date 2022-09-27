import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import QuizFinalScreen from './quiz-finalscreen';

const QuizCardQuestion = ({ questions, quiz }) => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);

	const handleClickAnswer = (e) => {
		setQuestionIndex(questionIndex + 1);
		questions[questionIndex].reponses.map(({ libelle, isValid }) => {
			if (e.target.textContent === libelle) {
				if (isValid) {
					setScore(score + 1);
				}
			}
		});
	};

	return (
		<>
			{questionIndex == questions.length ? (
				<>
					{' '}
					<QuizFinalScreen score={score} quiz={quiz} />{' '}
				</>
			) : (
				<>
					<Typography variant="h4">Questions {questionIndex + 1}</Typography>
					<Typography mt={5}>{questions[questionIndex].libelle}</Typography>
					{questions[questionIndex].reponses.map(({ reponseID, libelle }) => {
						// {
						// 	console.log(questionIndex);
						// }
						return (
							<Box mt={2} key={reponseID}>
								<Button onClick={handleClickAnswer} variant="contained">
									{libelle}
								</Button>
							</Box>
						);
					})}
					<Box mt={5}>
						Score: {score} / {questions.length}
					</Box>
				</>
			)}
		</>
	);
};
export default QuizCardQuestion;
