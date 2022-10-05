import {
	createTheme,
	InputAdornment,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	ThemeProvider,
} from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TableScoreRow from './TableScoreRow';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const TableScore = ({ score }) => {
	const [allScore, setAllScore] = useState(score);
	const [backupScore, setBackupScore] = useState(score);

	const searchScore = (value) => {
		if (value.length <= 0) {
			setAllScore(backupScore);
		} else {
			const newQuiz = allScore.filter((score) => {
				switch (true) {
					case score.quizID.toLowerCase().startsWith(value.toLowerCase()):
						return score;
					case score.name.toLowerCase().startsWith(value.toLowerCase()):
						return score;
				}
			});
			setAllScore(newQuiz);
		}
	};


	return (
		<>
				<ThemeProvider theme={darkTheme}>
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
					<TableContainer component={Paper} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.16)' }}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{allScore.map((score) => {
									return <TableScoreRow data={[score]} />;
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</ThemeProvider>
		
		</>
	);
};

export default TableScore;
