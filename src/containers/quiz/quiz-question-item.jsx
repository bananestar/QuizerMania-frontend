import { Grid, IconButton, MenuItem, Select, TableCell, TableRow, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/system';
import { useState } from 'react';
import RequestQuizTheme from '../../components/quiz/request/request-quiz-theme';

const QuizQuestionItem = ({ question, updated }) => {
	const [libelleQ, setLibelleQ] = useState(question.libelle);
	const [reponses, setReponses] = useState(question.reponses);
	const [themes, setThemes] = useState([]);
	const [themeSelected, setThemeSelected] = useState('');

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
		};
	};

	const handleTheme = (el) => {
		setThemes(el);
		el.map(({ themeID, name }) => (themeID === question.themeID ? setThemeSelected(name) : ''));
	};

	const handleSelectedTheme = (el) => {
		console.log(el);
		setThemeSelected(el);
		console.log(themeSelected);
	};

	return (
		<>
			<TableRow>
				<TableCell>{question.questionID}</TableCell>
				<TableCell>
					<TextField
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
											id={el.reponseID}
											label={'proposition ' + el.reponseID}
											margin="dense"
											variant="filled"
											value={el.libelle}
											onChange={({ target }) => {
												handleAnswer(el.reponseID, target.value, el.isValid);
											}}
										/>
										<IconButton onClick={() => handleAnswer(el.reponseID, el.libelle, !el.isValid)}>
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
							<RequestQuizTheme theme={(el) => handleTheme(el)} />
							{themeSelected ? (
								<Select
									labelId="theme-select-label"
									id="theme-select"
									value={themeSelected}
									label="Theme"
									margin="dense"
									variant="filled"
									onClick={({ target }) => {
										handleSelectedTheme(target);
									}}
								>
									{themes.map(({ themeID, name }) => (
										<MenuItem key={themeID} value={name}>
											{name}
										</MenuItem>
									))}
								</Select>
							) : (
								''
							)}
						</Grid>
					</Grid>
				</TableCell>
				<TableCell>
					<Container>
						<IconButton onClick={() => handleSend()}>
							<DoneIcon />
						</IconButton>
					</Container>
					<Container>
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</Container>
				</TableCell>
			</TableRow>
		</>
	);
};

export default QuizQuestionItem;
