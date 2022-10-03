import {
	Button,
	Collapse,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import AdminQuizQuestionReponseItem from './admin-quiz-question-reponse-item';

const AdminQuizQuestionReponseList = ({ reponses}) => {
	return (
		<TableRow>
			<TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
				<Collapse in={true} timeout="auto" unmountOnExit>
					<Box sx={{ margin: 1 }}>
						<Grid container>
							<Grid item xs={11}>
								<Typography variant="h6" gutterBottom component="div">
									Reponses
								</Typography>
							</Grid>
						</Grid>
						<Table size="small" aria-label="reponses">
							<TableHead>
								<TableRow>
									<TableCell>ReponseID</TableCell>
									<TableCell>IsValid</TableCell>
									<TableCell>Libelle</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{reponses.map((reponse) => {
									return <AdminQuizQuestionReponseItem key={reponse.reponseID} reponse={reponse} />;
								})}
							</TableBody>
						</Table>
					</Box>
				</Collapse>
			</TableCell>
		</TableRow>
	);
};

export default AdminQuizQuestionReponseList;
