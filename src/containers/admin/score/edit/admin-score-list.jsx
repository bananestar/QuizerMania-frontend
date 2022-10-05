import {
	InputAdornment,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdminScoreItem from './admin-score-item';
import { useState } from 'react';
import { sortBy } from 'lodash';

const AdminScoreList = ({ scores, quizID }) => {
	const [allScore, setAllScore] = useState(scores);
	const [backupScore, setBackupScore] = useState(scores);

	const searchScore = (value) => {
		if (value.length <= 0) {
			setAllScore(backupScore);
		} else {
			const newQuiz = allScore.filter((score) => {
				switch (true) {
					case Number(score.score) === Number(value):
						return score;
					case score.user.pseudo.toLowerCase().startsWith(value.toLowerCase()):
						return score;
					case new Date(score.createdAt)
						.toLocaleDateString('fr-FR')
						.startsWith(value.toLowerCase()):
						return score;
					case new Date(score.updatedAt)
						.toLocaleDateString('fr-FR')
						.startsWith(value.toLowerCase()):
						return score;
				}
			});
			newQuiz.length === 0 ? setAllScore(backupScore) : setAllScore(newQuiz);
		}
	};

	return (
		<>
			<TextField
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				label="Search"
				variant="outlined"
				onChange={({ target }) => searchScore(target.value)}
			/>
			<br />
			<br />
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ScoreID</TableCell>
							<TableCell>Pseudo</TableCell>
							<TableCell>Score</TableCell>
							<TableCell>Created At</TableCell>
							<TableCell>Updated At</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{sortBy(allScore, ['score'])
							.reverse()
							.map((e) => {
								return <AdminScoreItem score={e} quizID={quizID} />;
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default AdminScoreList;
