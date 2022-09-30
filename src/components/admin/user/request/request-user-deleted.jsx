import { Alert, CircularProgress } from '@mui/material';
import { useDeleted } from '../../../../hooks/useRequest';

const RequestUserDeleted = ({ userID }) => {
	const URL_USER = import.meta.env.VITE_API_USERS;

	if (userID) {
		const { data, isLoading, errors } = useDeleted(URL_USER, userID);

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
			window.location.reload();
		}
	}
};

export default RequestUserDeleted;
