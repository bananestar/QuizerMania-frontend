import {
	Alert,
	Box,
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { userIdAtom } from '../../atoms/jwtAtom';
import { useQuery } from '../../hooks/useRequest';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

const ProfilScore = () => {
	const [userID, setUserID] = useRecoilState(userIdAtom);
	const url = import.meta.env.VITE_API_SCORE + 'byUser/';

	const { data, isLoading, errors } = useQuery(url, userID);

	if (isLoading) {
		return <CircularProgress />;
	}
	if (errors) {
		console.error('-------------ERROR------------');
		console.error(errors);
		console.error('-------------ERROR------------');
		return (
			<Alert margin="dense" severity="error">
				{errors}
			</Alert>
		);
	}
	if (data) {
		const scores = data.result;
		console.log(scores);
		return (
			<>
				<h3>Score <ScoreboardIcon/></h3>
				<TableContainer component={Paper}>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>Quiz</TableCell>
								<TableCell>Score</TableCell>
								<TableCell>Last Update</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{scores.map((row) => (
								<TableRow key={row.scoreID}>
									<TableCell> {row.quiz.name} </TableCell>
									<TableCell> {row.score} </TableCell>
									<TableCell> {new Date(row.updatedAt).toLocaleDateString('fr-FR')} </TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</>
		);
	}
};
export default ProfilScore;
