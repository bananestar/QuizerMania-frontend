import { TableCell, TableRow } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const AdminQuizQuestionReponseItem = ({ reponse }) => {
	return (
		<TableRow>
			<TableCell width="10%"> {reponse.reponseID} </TableCell>
			<TableCell width="10%">
				{reponse.isValid ? (
					<CheckIcon sx={{ color: 'green' }} />
				) : (
					<CloseIcon sx={{ color: 'red' }} />
				)}
			</TableCell>
			<TableCell> {reponse.libelle} </TableCell>
		</TableRow>
	);
};

export default AdminQuizQuestionReponseItem;
