import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton, TableCell, TableRow } from '@mui/material';
import PopupInfoQuiz from '../../../components/admin/quiz/popup-info-quiz';
import PopupEditQuiz from '../../../components/admin/quiz/popup-edit-quiz';
import RequestQuizGetAllQuestionQuiz from '../../../components/admin/quiz/request/request-quiz-getAllQuestionQuiz';

const TableQuizRow = ({ data }) => {
	const [popupInfo, setPopupInfo] = useState(false);
	const [popupEdit, setPopupEdit] = useState(false);
	const [popupDelete, setPopupDelete] = useState(false);
	// console.log(data);
	const [dt, setDt] = useState();

	return (
		<TableRow key={data[0].quizID}>
			<TableCell> {data[0].quizID} </TableCell>
			<TableCell> {data[0].name} </TableCell>
			<TableCell>{new Date(data[0].createdAt).toLocaleDateString('fr-FR')}</TableCell>
			<TableCell>{new Date(data[0].updatedAt).toLocaleDateString('fr-FR')}</TableCell>
			<TableCell>
				<IconButton
					onClick={() => {
						setPopupInfo(true);
					}}
				>
					<SearchIcon />
				</IconButton>
				<IconButton
					onClick={() => {
						setPopupEdit(true);
					}}
				>
					<EditIcon />
				</IconButton>
				<IconButton
					onClick={() => {
						setPopupDelete(true);
					}}
				>
					<DeleteForeverIcon />
				</IconButton>
			</TableCell>
			{popupInfo ? <PopupInfoQuiz quizID={data[0].quizID} popup={(e) => setPopupInfo(e)} /> : ''}
			{popupEdit ? (
				<>
					<RequestQuizGetAllQuestionQuiz
						quizID={data[0].quizID}
						dt={(e) => {
							setDt(e.result[0]);
						}}
					/>
					{dt ? <PopupEditQuiz dt={dt} popup={(e) => setPopupEdit(e)} /> : ''}
					
				</>
			) : (
				''
			)}
			{/* {popupEdit ? <PopupEditUser data={data} popup={(e) => setPopupEdit(e)} /> : ''}
			{popupDelete ? (
				<PopupDeleteUser
					pseudo={data[0].pseudo}
					quizID={data[0].quizID}
					popup={(e) => setPopupDelete(e)}
				/>
			) : (
				''
			)} */}
		</TableRow>
	);
};

export default TableQuizRow;
