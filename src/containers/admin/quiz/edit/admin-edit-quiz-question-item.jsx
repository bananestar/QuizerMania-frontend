import { IconButton, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RequestQuizTheme from '../../../../components/quiz/request/request-quiz-theme';
import AdminEditQuizQuestionLibelle from './admin-edit-quiz-question-libelle';
import AdminEditQuizQuestionReponseList from './admin-edit-quiz-question-reponse.list';
import { useEffect } from 'react';

const AdminEditQuizQuestionItem = ({ question, update, deleted, error }) => {
	const [popupQuestion, setPopupQuestion] = useState(false);

	const [data, setData] = useState(question);

	useEffect(()=>{setData(question)},[question])

	const handleUpdate = (el, control) => {
		if (el) {
			switch (control) {
				case 1:
					setData({
						libelle: data.libelle,
						questionID: data.questionID,
						reponses: data.reponses,
						themeID: el,
					});
					break;
				case 2:
					setData({
						themeID: data.themeID,
						questionID: data.questionID,
						reponses: data.reponses,
						libelle: el,
					});
					break;
				case 3:
					setData({
						libelle: data.libelle,
						questionID: data.questionID,
						themeID: data.themeID,
						reponses: el,
					});
					break;
			}
		}
	};

	useEffect(() => {
		update(data);
	}, [data]);

	return (
		<>
			<TableRow>
				<TableCell width="10%">{data.questionID}</TableCell>
				<TableCell width="10%">
					<RequestQuizTheme themeID={data.themeID} theme={(theme) => handleUpdate(theme, 1)} />
				</TableCell>
				<TableCell>
					<AdminEditQuizQuestionLibelle
						libelle={data.libelle}
						libelleQuiz={(libelle) => {
							handleUpdate(libelle, 2);
						}}
						error={(e) => {
							error(e);
						}}
					/>
				</TableCell>
				<TableCell width="1%">
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setPopupQuestion(!popupQuestion)}
					>
						{popupQuestion ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell width="1%">
					<IconButton disabled={true}
						onClick={() => {
							deleted(data.questionID);
						}}
					>
						<DeleteForeverIcon />
					</IconButton>
				</TableCell>
			</TableRow>
			{popupQuestion ? (
				<AdminEditQuizQuestionReponseList
					reponses={data.reponses}
					update={(reponses) => {
						handleUpdate(reponses, 3);
					}}
					error={(e) => error(e)}
				/>
			) : (
				''
			)}
		</>
	);
};

export default AdminEditQuizQuestionItem;
