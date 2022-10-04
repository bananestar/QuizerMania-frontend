import {
	Box,
	Button,
	createTheme,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	ThemeProvider,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
// import RequestQuizAdd from './request/request-quiz-add';
import QuizFormName from '../../../containers/quiz/add/quiz-form-name';
import QuizTableQuestion from '../../../containers/quiz/add/quiz-table-question';
import PopupConfirmQuiz from './popup-confirm-quiz';
import { useEffect } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const PopupAddQuiz = ({ popup }) => {
	const { handleSubmit, register } = useForm();
	const [open, setOpen] = useState(true);
	const [send, setSend] = useState(false);
	const [lock, setLock] = useState(true);

	const [controlName, setControlName] = useState(true);
	const [controlQuestion, setControlQuestion] = useState(true);

	const [quizName, setQuizName] = useState('');
	const [quizQuestions, setQuizQuestions] = useState();
	const [errors, setErrors] = useState('');

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

	const handleClose = () => {
		setOpen(false);
		popup(false);
	};

	const handleSave = () => {
		setSend(true);
	};

	// useEffect(()=>{console.log(errors);},[errors])

	useEffect(() => {
		if (controlName) {
			return setLock(true);
		}
		if (controlQuestion) {
			return setLock(true);
		}
		setLock(false);
	}, [controlName, controlQuestion]);
	return (
		<div>
			<ThemeProvider theme={darkTheme}>
				<Dialog
					fullScreen={fullScreen}
					open={open}
					maxWidth={true}
					onClose={handleClose}
					TransitionComponent={Transition}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogContent>
						{send ? (
							<PopupConfirmQuiz data={[{ quiz: quizName }, { questions: quizQuestions }]} />
						) : (
							<>
								<Grid container direction="column" spacing={2}>
									<Grid item>
										<QuizFormName
											quizName={(e) => setQuizName(e)}
											error={(e) => setErrors(e)}
											control={(e) => {
												setControlName(e);
											}}
										/>
										<br />
										<br />
										<Button
											endIcon={<SaveIcon />}
											variant="contained"
											onClick={handleSave}
											disabled={lock}
										>
											Save Quiz
										</Button>
									</Grid>
									<Grid item>
										<QuizTableQuestion
											save={(e) => setQuizQuestions(e)}
											control={(e) => {
												setControlQuestion(e);
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
			</ThemeProvider>
		</div>
	);
};

export default PopupAddQuiz;
