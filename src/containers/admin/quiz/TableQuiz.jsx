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
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TableQuizRow from './TableQuizRow';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const TableQuiz = ({ quiz }) => {
	const [allQuiz, setAllQuiz] = useState(quiz);
	const [backupQuiz, setBackupQuiz] = useState(quiz);

	const searchQuiz = (value) => {
		if (value.length <= 0) {
			setAllQuiz(backupQuiz);
		} else {
			const newQuiz = allQuiz.filter((quiz) => {
				switch (true) {
					case quiz.quizID.toLowerCase().startsWith(value.toLowerCase()):
						return quiz;
					case quiz.name.toLowerCase().startsWith(value.toLowerCase()):
						return quiz;
					case new Date(quiz.createdAt).toLocaleDateString('fr-FR').startsWith(value.toLowerCase()):
						return quiz;
					case new Date(quiz.updatedAt).toLocaleDateString('fr-FR').startsWith(value.toLowerCase()):
						return quiz;
				}
			});
			setAllQuiz(newQuiz);
		}
	};

	return (
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
				onChange={({ target }) => searchQuiz(target.value)}
			/>
			<br />
			<br />
			<TableContainer component={Paper} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.16)' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Created At</TableCell>
							<TableCell>Update At</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{allQuiz.map((quiz) => {
							return <TableQuizRow data={[quiz]} />;
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
};

export default TableQuiz;
