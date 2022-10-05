import { TableCell, TableRow } from "@mui/material";

const AdminScoreItem = ({ score }) => {
	return (
		<>
			<TableRow>
				<TableCell>{score.scoreID}</TableCell>
				<TableCell>{score.user.pseudo}</TableCell>
				<TableCell>{score.score}</TableCell>
				<TableCell>{new Date(score.createdAt).toLocaleDateString('fr-FR')}</TableCell>
				<TableCell>{new Date(score.updatedAt).toLocaleDateString('fr-FR')}</TableCell>
			</TableRow>
		</>
	);
};

export default AdminScoreItem;