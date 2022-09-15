import { Alert, CircularProgress } from '@mui/material';
import { useLogin } from '../../../hooks/useRequest';

const RequestLogin = ({ identifiers }) => {
	if (identifiers) {
		const { isLoading, errors } = useLogin(identifiers);
		if (isLoading) {
			return <CircularProgress />;
		}
		if (errors) {
			console.error('-------------ERROR------------');
			console.error(errors);
			console.error('-------------ERROR------------');
			return (
				<Alert margin="dense" severity="error">
					ERROR Identifier and Password was wrong
				</Alert>
			);
		}
	}

    return <></>
};

export default RequestLogin;
