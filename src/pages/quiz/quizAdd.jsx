import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import QuizFormName from '../../containers/quiz/add/quiz-form-name';
import QuizTableQuestion from '../../containers/quiz/add/quiz-table-question';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PopupConfirm from '../../components/quiz/popup-confirm-quiz';

const QuizAddPage = () => {
	const [quizName, setQuizName] = useState('');
	const [quizQuestions, setQuizQuestions] = useState();
	const [errors, setErrors] = useState('');

	const [send, setSend] = useState(false);

	// useEffect(() => {
	// 	console.log(quizName);
	// }, [quizName]);

	// useEffect(() => {
	// 	console.log(quizQuestions);
	// }, [quizQuestions]);

	const handleSave = () => {
		setSend(true);
	};

	return (
		<Box sx={{ marginLeft: 30, flexGrow: 1 }}>
			{send ? (
				<PopupConfirm
					send={(e) => setSend(e)}
					data={[{ quiz: quizName }, { questions: quizQuestions }]}
				/>
			) : (
				''
			)}
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<QuizFormName quizName={(e) => setQuizName(e)} error={(e) => setErrors(e)} />
					<br />
					<br />
					<Button endIcon={<SaveAsIcon />} variant="contained" onClick={handleSave}>
						Save Quiz
					</Button>
				</Grid>
				<Grid item xs={8}>
					<QuizTableQuestion save={(e) => setQuizQuestions(e)} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default QuizAddPage;
