import { Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useScoreAddUpdate } from '../../../hooks/useRequest';

const RequestScoreUpdateUser = ({ dt }) => {
	const navigate = useNavigate();

	if (dt) {
		const { data, isLoading, errors } = useScoreAddUpdate(dt);

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
				navigate('/quiz');
			}

		return <></>;
	}
};
export default RequestScoreUpdateUser;
