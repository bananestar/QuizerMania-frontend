import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { sortBy } from 'lodash';

const ScoreDisplayQuiz = ({ data }) => {
	const score = data.result.map((e) => {
		return {
			scoreID: e.scoreID,
			quizName: e.quiz.name,
			userName: e.user.pseudo,
			score: e.score,
			createdAt: e.createdAt,
			updatedAt: e.updatedAt,
		};
	});

	if (score.length === 0) {
		return <h1>No score for the moment</h1>
	}

	return (
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Position</TableCell>
							<TableCell>Player</TableCell>
							<TableCell>Score</TableCell>
							<TableCell>Created At</TableCell>
							<TableCell>Updated At</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{sortBy(score, ['score'])
							.reverse()
							.map((el, i) => {
								return (
									<TableRow key={el.scoreID}>
										<TableCell> {i + 1} </TableCell>
										<TableCell> {el.userName} </TableCell>
										<TableCell> {el.score} </TableCell>
										<TableCell> {new Date(el.createdAt).toLocaleDateString('fr-FR')} </TableCell>
										<TableCell> {new Date(el.updatedAt).toLocaleDateString('fr-FR')} </TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
export default ScoreDisplayQuiz;
