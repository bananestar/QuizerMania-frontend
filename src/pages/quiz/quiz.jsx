import {
	Alert,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import QuizCard from '../../containers/quiz/quiz-card';
import { useQuery } from '../../hooks/useRequest';

const QuizPage = () => {
	const URL = import.meta.env.VITE_API_QUIZ;
	const { data, isLoading, errors } = useQuery(URL);

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
		const quiz = data.results;
		console.log(quiz);

		return (
			<Box sx={{ marginLeft: 30, flexGrow: 1 }}>
				<Grid container spacing={3}>
					<Grid
						item
						sx={{
                            width: 275,
							boxShadow: 6,
							':hover': {
								boxShadow: 20,
							},
						}}
						
					>
						<Card
							component={Link}
							to="/"
						>
							<CardMedia component="img" alt="quiz img" height="200" image="" />
							<CardContent>
								<Typography sx={{ fontSize: 18 }} variant="h5" component="div" gutterBottom>
									add
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					{quiz.map((e) => (
						<>
							&nbsp; &nbsp; &nbsp;
							<Grid
								item
								sx={{
                                    width: 275,
									boxShadow: 6,
									':hover': {
										boxShadow: 20,
									},
								}}
							>
								<QuizCard quiz={e} />
							</Grid>
						</>
					))}
				</Grid>
			</Box>
		);
	}
};
export default QuizPage;

// QuizCard
