import {
	Box,
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
import { useEffect } from 'react';
import { useState } from 'react';
import QuizQuestionList from './quiz-question-list';

const questionItem = {
	questionID: 1,
	libelle: 'Your question ?',
	themeID: 1,
	reponses: [
		{
			reponseID: 1,
			isValid: true,
			libelle: 'Proposal 1',
			questionID: 1,
		},
		{
			reponseID: 2,
			isValid: false,
			libelle: 'Proposal 2',
			questionID: 1,
		},
		{
			reponseID: 3,
			isValid: false,
			libelle: 'Proposal 3',
			questionID: 1,
		},
		{
			reponseID: 4,
			isValid: false,
			libelle: 'Proposal 4',
			questionID: 1,
		},
	],
};

const QuizTableQuestion = ({ save }) => {
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
			const id = questions[questions.length - 1].questionID;

			const newQuestion = {
				questionID: id + 1,
				libelle: 'Your Question ?',
				themeID: 1,
				reponses: [
					{
						reponseID: 1,
						isValid: true,
						libelle: 'Proposal 1',
						questionID: id + 1,
					},
					{
						reponseID: 2,
						isValid: false,
						libelle: 'Proposal 2',
						questionID: id + 1,
					},
					{
						reponseID: 3,
						isValid: false,
						libelle: 'Proposal 3',
						questionID: id + 1,
					},
					{
						reponseID: 4,
						isValid: false,
						libelle: 'Proposal 4',
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

	useEffect(() => {
		save(questions);
	}, [questions]);

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
				<Box sx={{p:2}}>
					<Button endIcon={<AddIcon />} variant="contained" onClick={handleAddQuestion}>
						Add
					</Button>
				</Box>
			</TableContainer>
		</>
	);
};

export default QuizTableQuestion;
