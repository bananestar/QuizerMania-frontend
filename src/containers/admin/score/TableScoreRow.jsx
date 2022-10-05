import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton, TableCell, TableRow } from '@mui/material';
import PopupInfoScore from '../../../components/admin/score/popup-info-score';
import PopupEditScore from '../../../components/admin/score/popup-edit-score';
import PopupDeleteScore from '../../../components/admin/score/popup-delete-score';

const TableScoreRow = ({ data }) => {
	const [popupInfo, setPopupInfo] = useState(false);
	const [popupEdit, setPopupEdit] = useState(false);
	const [popupDelete, setPopupDelete] = useState(false);

	return (
		<TableRow key={data[0].quizID}>
			<TableCell> {data[0].quizID} </TableCell>
			<TableCell> {data[0].name} </TableCell>
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
			{popupInfo ? <PopupInfoScore score={data[0]} popup={(e) => setPopupInfo(e)} /> : ''}
			{popupEdit ? <PopupEditScore score={data[0]} quizID={data[0].quizID} popup={(e) => setPopupEdit(e)} /> : ''}
			{popupDelete ? <PopupDeleteScore quizName={data[0].name} quizID={data[0].quizID} popup={(e) => setPopupDelete(e)} /> : ''}
		</TableRow>
	);
};

export default TableScoreRow;
