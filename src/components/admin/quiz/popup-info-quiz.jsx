import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef, useEffect, useState } from 'react';
import RequestQuizGetAllQuestionQuiz from './request/request-quiz-getAllQuestionQuiz';
import AdminQuizQuestionList from '../../../containers/admin/quiz/info/admin-quiz-question-list';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const PopupInfoQuiz = ({ quizID, popup }) => {
	const [open, setOpen] = useState(true);
	const [data, setData] = useState();

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

	const handleClose = () => {
		setOpen(false);
		popup(false);
	};

	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);

	return (
		<>
			<RequestQuizGetAllQuestionQuiz
				quizID={quizID}
				dt={(e) => {
					setData(e.result[0]);
				}}
			/>
			{data ? (
				<div>
					<Dialog
						fullScreen={fullScreen}
						maxWidth={true}
						open={open}
						onClose={handleClose}
						TransitionComponent={Transition}
						aria-labelledby="responsive-dialog-title"
					>
						<DialogTitle id="responsive-dialog-title" variant="h4">
							Quiz Info : {data.name}
						</DialogTitle>
						<DialogContent>
							<br />
							<Grid container spacing={3}>
								<Grid item>QuizID : {data.quizID}</Grid>
								<Grid item>CreatedAt : {new Date(data.createdAt).toLocaleDateString('fr-FR')}</Grid>
								<Grid item>UpdatedAt : {new Date(data.updatedAt).toLocaleDateString('fr-FR')}</Grid>
								<Grid item xs={12}> <AdminQuizQuestionList questions={data.questions} /> </Grid>
							</Grid>
						</DialogContent>
						<DialogActions>
							<Button autoFocus onClick={handleClose}>
								<CloseIcon />
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default PopupInfoQuiz;
