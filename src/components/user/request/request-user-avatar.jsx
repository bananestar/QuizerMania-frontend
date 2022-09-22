import { Alert, CircularProgress } from '@mui/material';
import { useUpdatedAccount } from '../../../hooks/useRequest';

const RequestUserAvatar = ({ file }) => {
	if (file) {
		const { data, isLoading, errors } = useUpdatedAccount(file);

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
		return <></>;
	}
};
export default RequestUserAvatar;
