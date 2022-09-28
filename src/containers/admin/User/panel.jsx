import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import TableUser from './tableUser';

const PanelUser = ({ users }) => {
	const countUser = users.count;
	const user = users.results;

	return (
		<>
			<h3>Users registered : {countUser} </h3>
			<Button
				endIcon={<AddIcon />}
				variant="outlined"
				color="success"
				onClick={() => console.log('add')}
			>
				Add New User
			</Button>

			<Box sx={{ p: 5 }}>
				<TableUser users={user} />
			</Box>
		</>
	);
};

export default PanelUser;
