import { Alert, CircularProgress } from '@mui/material';
import { useAdd } from '../../../../hooks/useRequest';

const RequestUserAdd = ({ dt }) => {
	const URL_USER = import.meta.env.VITE_API_USERS + 'addAdmin';

	if (dt) {
		const { data, isLoading, errors } = useAdd(URL_USER, dt);

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

export default RequestUserAdd;
