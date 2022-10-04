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
import { forwardRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AdminEditQuizName from '../../../containers/admin/quiz/edit/admin-edit-quiz-name';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import AdminEditQuizQuestionList from '../../../containers/admin/quiz/edit/admin-edit-quiz-question-list';
import RequestQuizUpdated from './request/request-quiz-updated';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const PopupEditQuiz = ({ dt, popup }) => {
	const [open, setOpen] = useState(true);
	const [data, setData] = useState(dt);
	const [title, setTitle] = useState(dt.name);

	const [error, setError] = useState();
	const [send, setSend] = useState(false);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

	const handleClose = () => {
		setOpen(false);
		popup(false);
	};

	const handleSave = () => {
		setSend(true);
	};

	const handleUpdate = (el, control) => {
		if (el) {
			switch (control) {
				case 1:
					setData({
						quizID: data.quizID,
						name: el,
						questions: data.questions,
						createdAt: data.createdAt,
						updatedAt: data.updatedAt,
					});
					break;
				case 2:
					setData({
						quizID: data.quizID,
						name: data.name,
						questions: el,
						createdAt: data.createdAt,
						updatedAt: data.updatedAt,
					});
					break;
			}
		}
	};

	return (
		<>
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
						Quiz Edit : {title}
					</DialogTitle>
					<DialogContent>
						{send ? (
							<RequestQuizUpdated quiz={data} />
						) : (
							<>
								<br />
								<Grid container spacing={3}>
									<Grid item>QuizID : {data.quizID}</Grid>
									<Grid item>
										CreatedAt : {new Date(data.createdAt).toLocaleDateString('fr-FR')}
									</Grid>
									<Grid item>
										UpdatedAt : {new Date(data.updatedAt).toLocaleDateString('fr-FR')}
									</Grid>
									<Grid item xs={12}>
										<AdminEditQuizName
											name={data.name}
											quizName={(e) => {
												handleUpdate(e, 1);
											}}
											error={(e) => setError(e)}
										/>
										&nbsp;&nbsp;
										<Button
											endIcon={<SaveAsIcon />}
											variant="contained"
											onClick={handleSave}
											disabled={error}
										>
											Save Quiz
										</Button>
									</Grid>
									<Grid item xs={12}>
										<AdminEditQuizQuestionList
											questions={data.questions}
											update={(e) => {
												handleUpdate(e, 2);
											}}
											error={(e) => {
												setError(e);
											}}
										/>
									</Grid>
								</Grid>
							</>
						)}
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose}>
							<CloseIcon />
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</>
	);
};

export default PopupEditQuiz;
