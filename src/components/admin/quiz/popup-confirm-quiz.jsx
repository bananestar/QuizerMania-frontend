import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import RequestQuizAdd from "./request/request-quiz-add";

const PopupConfirmQuiz = ({ data }) => {
	const [open, setOpen] = useState(true);
	const [quiz, setQuiz] = useState();
	const [sendData, setSendData] = useState(false);

	const handleDataPreparation = () => {
		console.log(data);

		const rawQuizName = data[0].quiz;
		const rawQuestion = data[1].questions;

		const questions = rawQuestion.map(({ libelle, themeID, reponses }) => {
			const reponse = reponses.map(({ libelle, isValid }) => {
				return { libelle: libelle, isValid: isValid };
			});
			return { libelle: libelle, themeID: themeID, reponse: reponse };
		});

		const rawQuiz = {
			name: rawQuizName,
			question: questions,
		};

		setQuiz(rawQuiz);
		setSendData(true);
	};

    const handleClose = () => {
		setOpen(false)
	};

	return (
		<>
			{sendData ? (
				<Dialog
					
					open={open}
					onClose={handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogTitle id="responsive-dialog-title">Saving the Quiz : {data[0].quiz} </DialogTitle>
					<DialogContent>
						<RequestQuizAdd dt={quiz} />
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose} endIcon={<CloseIcon />} />
					</DialogActions>
				</Dialog>
			) : (
				<Dialog
			
					open={open}
					onClose={handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogTitle id="responsive-dialog-title">Are you sure to save this quiz?</DialogTitle>
					<DialogContent>
						<DialogContentText>
							The backup will be permanent! No changes after that!
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose}>
							No
						</Button>
						<Button onClick={handleDataPreparation} autoFocus>
							Yes
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
};
export default PopupConfirmQuiz;
