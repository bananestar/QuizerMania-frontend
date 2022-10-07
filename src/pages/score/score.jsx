import { Alert, CircularProgress } from '@mui/material';
import DisplayScore from '../../containers/score/score-display';
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
		const score = data.results.map((e) => {
			return e;
		});
		return <DisplayScore score={score} />
			
	}};

export default ScorePage;
