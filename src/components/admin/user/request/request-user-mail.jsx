import { Alert, CircularProgress } from '@mui/material';
import { useUpdated } from '../../../../hooks/useRequest';

const RequestUserMail = ({ email, userID }) => {
	const URL_USER = import.meta.env.VITE_API_USERS;

	if (email) {
		const dt = {
			userID: userID,
			email: email,
		};
		const { data, isLoading, errors } = useUpdated(URL_USER, dt, userID);

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

export default RequestUserMail;
