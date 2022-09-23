import { Alert, CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import ScoreCard from '../../containers/score/score-card';
import { useQuery } from '../../hooks/useRequest';

const ScorePage = () => {
	const URL = import.meta.env.VITE_API_SCORE;
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
		const quiz = data.results.map((e) => {
			return e;
		});
		return (
			<Box sx={{ marginLeft: 30, flexGrow: 1 }}>
				<Grid container >
					{quiz.map((e) => {
						return (
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
                                    <ScoreCard quiz={e} />
                                </Grid>
							</>
						);
					})}
				</Grid>
			</Box>
		);
	}
};

export default ScorePage;
