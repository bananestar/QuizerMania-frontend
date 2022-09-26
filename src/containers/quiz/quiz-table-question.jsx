import {
	Button,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import { useEffect } from 'react';
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

	const handleUpdate = (e) => {
		const newQuestions = questions.map((el) => {
			if (el.questionID === e.questionID) {
				return e;
			} else {
				return el;
			}
		});

		setQuestions(newQuestions);
	};

	const handleAddQuestion = () => {
		if (questions.length > 0) {
			console.log('pouet');
			const id = questions[questions.length - 1].questionID;

			const newQuestion = {
				questionID: id + 1,
				libelle: 'votre question ?',
				themeID: 1,
				reponses: [
					{
						reponseID: 1,
						isValid: true,
						libelle: 'proposition 1',
						questionID: id + 1,
					},
					{
						reponseID: 2,
						isValid: false,
						libelle: 'proposition 2',
						questionID: id + 1,
					},
					{
						reponseID: 3,
						isValid: false,
						libelle: 'proposition 3',
						questionID: id + 1,
					},
					{
						reponseID: 4,
						isValid: false,
						libelle: 'proposition 4',
						questionID: id + 1,
					},
				],
			};
			setQuestions((prevQuestion) => [...prevQuestion, newQuestion]);
		} else {
			setQuestions([questionItem]);
		}
	};

	const handleDeleteQuestion = (e) => {
		setQuestions(questions.filter((item) => item.questionID !== e));
	};

	// useEffect(() => {
	// 	console.log(questions);
	// }, [questions]);

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
						<QuizQuestionList
							questions={questions}
							updated={(e) => handleUpdate(e)}
							deleted={(e) => handleDeleteQuestion(e)}
						/>
					</TableBody>
				</Table>
				<Container>
					<Button endIcon={<AddIcon />} variant="contained" onClick={handleAddQuestion}>
						Add
					</Button>
				</Container>
				<br />
			</TableContainer>
		</>
	);
};

export default QuizTableQuestion;
