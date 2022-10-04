import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdminEditQuizQuestionItem from './admin-edit-quiz-question-item';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminEditQuizQuestionList = ({ questions, update, error }) => {
	const [data, setData] = useState(questions);

	const handleUpdateQuestion = (el) => {
		if (el) {
			const dt = data.map((e) => {
				if (e.questionID === el.questionID) {
					return el;
				}
				return e;
			});
			setData(dt);
		}
	};

	const handleAddQuestion = () => {
		const id = data[data.length - 1].questionID + 1;
		const newQuestion = {
			questionID: id,
			libelle: 'Your Question ?',
			themeID: 1,
			reponses: [
				{
					reponseID: 1,
					isValid: true,
					libelle: 'Proposal 1',
					questionID: id,
				},
				{
					reponseID: 2,
					isValid: false,
					libelle: 'Proposal 2',
					questionID: id,
				},
				{
					reponseID: 3,
					isValid: false,
					libelle: 'Proposal 3',
					questionID: id,
				},
				{
					reponseID: 4,
					isValid: false,
					libelle: 'Proposal 4',
					questionID: id,
				},
			],
		};
		setData((prevQuestion) => [...prevQuestion, newQuestion]);
	};

	const handleDeleteQuestion = (el) => {
		console.log(el);
		const newQuestion = data.filter((e)=>{
			if (e.questionID != el) {
				return e
			}
		})
		setData(newQuestion);
		update(data);
	};

	useEffect(() => {
		update(data);
	}, [data]);

	return (
		<>
			<Button variant="contained" onClick={handleAddQuestion}>
				Add Question
			</Button>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>QuestionID</TableCell>
							<TableCell>Theme</TableCell>
							<TableCell>Libelle</TableCell>
							<TableCell>
								<SearchIcon />
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((question) => {
							return (
								<AdminEditQuizQuestionItem
									question={question}
									update={(e) => {
										handleUpdateQuestion(e);
									}}
									deleted={(e) => {
										handleDeleteQuestion(e);
									}}
									error={(e) => {
										error(e);
									}}
								/>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default AdminEditQuizQuestionList;
