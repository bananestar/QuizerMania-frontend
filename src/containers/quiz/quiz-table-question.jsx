import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useState } from 'react';
import QuizQuestionList from './quiz-question-list';

const questionItem = {
	questionID: 1,
	libelle: 'votre question ?',
	themeID: 1,
	reponses: [
		{
			reponseID: 1,
			isValid: true,
			libelle: 'proposition 1',
			questionID: 1,
		},
		{
			reponseID: 2,
			isValid: false,
			libelle: 'proposition 2',
			questionID: 1,
		},
		{
			reponseID: 3,
			isValid: false,
			libelle: 'proposition 3',
			questionID: 1,
		},
		{
			reponseID: 4,
			isValid: false,
			libelle: 'proposition 4',
			questionID: 1,
		},
	],
};

const QuizTableQuestion = () => {
	const [questions, setQuestions] = useState([questionItem]);
	return (
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Question</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<QuizQuestionList questions={questions} />
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default QuizTableQuestion;
