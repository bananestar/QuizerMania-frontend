import { Alert, Button, Grid, IconButton, TableCell, TableRow, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/system';
import { useState } from 'react';
import RequestQuizTheme from '../../../components/quiz/request/request-quiz-theme';
import { useEffect } from 'react';

const QuizQuestionItem = ({ question, updated, deleted, control }) => {
	const [libelleQ, setLibelleQ] = useState(question.libelle);
	const [reponses, setReponses] = useState(question.reponses);
	const [themeSelected, setThemeSelected] = useState();
	const [lock, setLock] = useState(false);
	const [security, setSecurity] = useState(false);

	const [errorMessageQuestion, setErrorMessageQuestion] = useState();
	const [errorMessageReponses, setErrorMessageReponses] = useState();

	const [errorMessageReponse1, setErrorMessageReponse1] = useState();
	const [errorMessageReponse2, setErrorMessageReponse2] = useState();
	const [errorMessageReponse3, setErrorMessageReponse3] = useState();
	const [errorMessageReponse4, setErrorMessageReponse4] = useState();

	const handleAnswer = (id, libelles, valid) => {
		let countEmptyField = 0;
		let countIncorrectAnswer = 0;
		const newReponses = reponses.map(({ reponseID, libelle, isValid, questionID }) => {
			if (reponseID === id) {
				return {
					reponseID: reponseID,
					libelle: libelles,
					isValid: valid,
					questionID: questionID,
				};
			} else {
				return {
					reponseID: reponseID,
					libelle: libelle,
					isValid: isValid,
					questionID: questionID,
				};
			}
		});

		newReponses.map(({ libelle, isValid }) => {
			if (libelle === '' || libelle.length <= 0) {
				countEmptyField++;
				if (countEmptyField >= 3) {
					setSecurity(true);
					setErrorMessageReponses('It must have at least 2 proposal fields filled in');
				} else {
					setSecurity(false);
					setErrorMessageReponses('');
				}
			}

			if (!isValid) {
				countIncorrectAnswer++;
				if (countIncorrectAnswer >= 4) {
					setSecurity(true);
					setErrorMessageReponses('Must have 1 or more correct answers');
				} else {
					setSecurity(false);
					setErrorMessageReponses('');
				}
			}
		});
		setReponses(newReponses);
	};

	const handleSend = () => {
		const quest = {
			questionID: question.questionID,
			libelle: libelleQ,
			themeID: themeSelected,
			reponses: reponses,
		};
		updated(quest);
	};

	const handleDelete = () => {
		deleted(question.questionID);
	};

	const controlField = (el, id) => {
		if (el.length <= 0) {
			switch (true) {
				case id === 1:
					setSecurity(true);
					setErrorMessageReponse1('the field is empty');
					break;
				case id === 2:
					setSecurity(true);
					setErrorMessageReponse2('the field is empty');
					break;
				case id === 3:
					setSecurity(true);
					setErrorMessageReponse3('the field is empty');
					break;
				case id === 4:
					setSecurity(true);
					setErrorMessageReponse4('the field is empty');
					break;
			}
		}
		if (el.length > 200) {
			switch (true) {
				case id === 1:
					setSecurity(true);
					setErrorMessageReponse1('the maximum of caractère is 200');
					break;
				case id === 2:
					setSecurity(true);
					setErrorMessageReponse2('the maximum of caractère is 200');
					break;
				case id === 3:
					setSecurity(true);
					setErrorMessageReponse3('the maximum of caractère is 200');
					break;
				case id === 4:
					setSecurity(true);
					setErrorMessageReponse4('the maximum of caractère is 200');
					break;
			}
		}
		if (el.length > 0 && el.length <= 200) {
			switch (true) {
				case id === 1:
					setSecurity(false);
					setErrorMessageReponse1('');
					break;
				case id === 2:
					setSecurity(false);
					setErrorMessageReponse2('');
					break;
				case id === 3:
					setSecurity(false);
					setErrorMessageReponse3('');
					break;
				case id === 4:
					setSecurity(false);
					setErrorMessageReponse4('');
					break;
			}
		}
	};
	useEffect(() => {
		if (libelleQ.length <= 0) {
			setErrorMessageQuestion('the field is empty');
			setSecurity(true);
		}
		if (libelleQ.length > 200) {
			setErrorMessageQuestion('the maximum of caractère is 200');
			setSecurity(true);
		}
		if (libelleQ.length > 0 && libelleQ.length <= 200) {
			setErrorMessageQuestion('');
			setSecurity(false);
		}
	}, [libelleQ]);

	useEffect(() => {
		controlField(reponses[0].libelle, 1);
	}, [reponses[0].libelle]);

	useEffect(() => {
		controlField(reponses[1].libelle, 2);
	}, [reponses[1].libelle]);

	useEffect(() => {
		controlField(reponses[2].libelle, 3);
	}, [reponses[2].libelle]);

	useEffect(() => {
		controlField(reponses[3].libelle, 4);
	}, [reponses[3].libelle]);

	useEffect(() => {
		control(security);
	}, [security]);

	return (
		<>
			<TableRow>
				<TableCell>{question.questionID}</TableCell>
				<TableCell>
					<TextField
						disabled={lock}
						id="field1"
						label="Question name"
						margin="dense"
						variant="filled"
						fullWidth
						value={libelleQ}
						helperText={errorMessageQuestion}
						error={errorMessageQuestion}
						onChange={({ target }) => setLibelleQ(target.value)}
					/>
					<Grid container>
						<Grid item xs={7}>
							{reponses.map((el) => {
								return (
									<Container>
										<TextField
											disabled={lock}
											id={el.reponseID}
											label={'proposal ' + el.reponseID}
											margin="dense"
											variant="filled"
											value={el.libelle}
											key={el.reponseID}
											helperText={
												el.reponseID === 1
													? errorMessageReponse1
													: el.reponseID === 2
													? errorMessageReponse2
													: el.reponseID === 3
													? errorMessageReponse3
													: errorMessageReponse4
											}
											error={
												el.reponseID === 1
													? errorMessageReponse1
													: el.reponseID === 2
													? errorMessageReponse2
													: el.reponseID === 3
													? errorMessageReponse3
													: errorMessageReponse4
											}
											onChange={({ target }) => {
												handleAnswer(el.reponseID, target.value, el.isValid);
											}}
										/>
										&ensp;&ensp;
										<Button
											onClick={() => handleAnswer(el.reponseID, el.libelle, !el.isValid)}
											disabled={lock}
											variant="contained"
											sx={{
												backgroundColor: el.isValid ? 'green' : 'red',
												'&:hover': {
													backgroundColor: el.isValid ? 'darkgreen' : 'darkred',
												},
											}}
										>
											{el.isValid ? (
												<>
													<DoneIcon />
													right
												</>
											) : (
												<>
													<CloseIcon />
													false
												</>
											)}
										</Button>
									</Container>
								);
							})}
							<br />
							{errorMessageReponses ? (
								<>
									<Container>
										<Alert severity="error"> {errorMessageReponses} </Alert>
									</Container>
								</>
							) : (
								''
							)}
						</Grid>
						<Grid item>
							<Container>
								<RequestQuizTheme
									themeID={question.themeID}
									theme={(e) => setThemeSelected(e)}
									lock={lock}
								/>
							</Container>
						</Grid>
					</Grid>
				</TableCell>
				<TableCell align="center">
					<Container>
						<Button
							variant="contained"
							sx={{
								backgroundColor: 'green',
								'&:hover': {
									backgroundColor: 'darkgreen',
								},
							}}
							disabled={security}
							onClick={() => {
								handleSend();
								setLock(true);
							}}
						>
							<DoneIcon />
						</Button>
					</Container>
					<br />
					<Container>
						<Button
							variant="contained"
							sx={{
								backgroundColor: 'red',
								'&:hover': {
									backgroundColor: 'darkred',
								},
							}}
							onClick={() => handleDelete()}
						>
							<DeleteIcon />
						</Button>
					</Container>
				</TableCell>
			</TableRow>
		</>
	);
};

export default QuizQuestionItem;
