import { Alert, CircularProgress } from '@mui/material';
import { useQuery } from '../../../hooks/useRequest';
import RequestScoreAddUser from './request-score-addUser';
import RequestScoreUpdateUser from './request-score-updateUser';

const RequestScoreByUser = ({ dt }) => {
	const url = import.meta.env.VITE_API_SCORE;
	const { data, isLoading, errors } = useQuery(url + 'byUser/', dt.userID);

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

	if (data.result.length === 0) {
		console.log('pas score pour ce user');
		return <RequestScoreAddUser dt={dt} />;
	} else {
		console.log('score trouver pour ce user');
		return <RequestScoreUpdateUser dt={dt} />;
	}
};

export default RequestScoreByUser;
