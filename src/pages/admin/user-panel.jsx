import { Alert, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import PanelUser from '../../containers/admin/user/panelUser';
import { useQuery } from '../../hooks/useRequest';
import NotFound from '../error/notfound';

const AdminUserPanel = () => {
	const url = import.meta.env.VITE_API_USERS;

	const { data, isLoading, errors } = useQuery(url);

	if (errors) {
		console.error('-------------ERROR------------');
		console.error(errors);
		console.error('-------------ERROR------------');
	}

	return (
		<Box>
			<h1>Admin User Panel</h1>
			{isLoading ? (
				<LinearProgress color="secondary" />
			) : errors ? (
				<Alert margin="dense" severity="error">
					{errors}
				</Alert>
			) : data ? (
				<PanelUser users={data} />
			) : (
				<NotFound />
			)}
		</Box>
	);
};
export default AdminUserPanel;
