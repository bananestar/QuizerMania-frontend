import { IconButton, TableCell, TableRow, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState } from 'react';
import RequestEditScore from '../../../../components/admin/score/request/request-edit-score';
import RequestDeletedScore from '../../../../components/admin/score/request/request-deleted-score';

const AdminScoreItem = ({ score, quizID }) => {
	const [sendEdit, setSendEdit] = useState(false);
	const [sendDeleted, setSendDeleted] = useState(false);
	const [scoreNumber, setScoreNumber] = useState(score.score);
	const [errorMessageScore, setErrorMessageScore] = useState('');

	useEffect(() => {
		if (!scoreNumber || scoreNumber.length === 0) {
			setErrorMessageScore('score is empty! if do you want empty , please filled with 0');
		}
		if (scoreNumber || scoreNumber.length > 0) {
			setErrorMessageScore('');
		}
	}, [scoreNumber]);

	return (
		<>
			{sendEdit ? <RequestEditScore scoreID={score.scoreID} userID={score.user.userID} quizID={quizID} score={scoreNumber} /> : '' }
			{sendDeleted ? <RequestDeletedScore scoreID={score.scoreID} /> : '' }
			<TableRow>
				<TableCell>{score.scoreID}</TableCell>
				<TableCell>{score.user.pseudo}</TableCell>
				<TableCell width={'10%'}>
					<TextField
						id="field1"
						label="Score"
						type={'number'}
						value={scoreNumber}
						size="small"
						variant="filled"
						helperText={errorMessageScore}
						error={errorMessageScore.length > 0}
						onChange={({ target }) => setScoreNumber(target.value)}
						autoComplete="field1"
					/>
				</TableCell>
				<TableCell>{new Date(score.createdAt).toLocaleDateString('fr-FR')}</TableCell>
				<TableCell>{new Date(score.updatedAt).toLocaleDateString('fr-FR')}</TableCell>
				<TableCell>
					<IconButton onClick={() => {setSendEdit(true)}}>
						<SaveIcon />
					</IconButton>
					<IconButton onClick={() => {setSendDeleted(true)}}>
						<DeleteForeverIcon />
					</IconButton>
				</TableCell>
			</TableRow>
		</>
	);
};

export default AdminScoreItem;
