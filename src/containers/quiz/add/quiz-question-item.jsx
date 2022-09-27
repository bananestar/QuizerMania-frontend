import { Grid, IconButton, TableCell, TableRow, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/system';
import { useState } from 'react';
import RequestQuizTheme from '../../../components/quiz/request/request-quiz-theme';

const QuizQuestionItem = ({ question, updated, deleted }) => {
	const [libelleQ, setLibelleQ] = useState(question.libelle);
	const [reponses, setReponses] = useState(question.reponses);
	const [themeSelected, setThemeSelected] = useState();
	const [lock, setLock] = useState(false);

	const handleAnswer = (id, libelles, valid) => {
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

	return (
		<>
			<TableRow>
				<TableCell>{question.questionID}</TableCell>
				<TableCell>
					<TextField
						disabled={lock}
						id="field1"
						label="Nom de la question"
						margin="dense"
						variant="filled"
						fullWidth
						value={libelleQ}
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
											label={'proposition ' + el.reponseID}
											margin="dense"
											variant="filled"
											value={el.libelle}
											onChange={({ target }) => {
												handleAnswer(el.reponseID, target.value, el.isValid);
											}}
										/>
										<IconButton
											onClick={() => handleAnswer(el.reponseID, el.libelle, !el.isValid)}
											disabled={lock}
										>
											{el.isValid ? (
												<>
													<DoneIcon />
													correct
												</>
											) : (
												<>
													<CloseIcon />
													faux
												</>
											)}
										</IconButton>
									</Container>
								);
							})}
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
				<TableCell>
					<Container>
						<IconButton
							onClick={() => {
								handleSend();
								setLock(true);
							}}
						>
							<DoneIcon />
						</IconButton>
					</Container>
					<Container>
						<IconButton onClick={() => handleDelete()}>
							<DeleteIcon />
						</IconButton>
					</Container>
				</TableCell>
			</TableRow>
		</>
	);
};

export default QuizQuestionItem;
