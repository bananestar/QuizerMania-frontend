import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import TableUser from './tableUser';
import { useState } from 'react';
import PopupAddUser from '../../../components/admin/popup-add-user';

const PanelUser = ({ users }) => {
	const [popupAdd, setPopupAdd] = useState(false);
	const countUser = users.count;
	const user = users.results;

	return (
		<>
			<h3>Users registered : {countUser} </h3>
			<Button
				endIcon={<AddIcon />}
				variant="outlined"
				color="success"
				onClick={() => {setPopupAdd(true)}}
			>
				Add New User
			</Button>

			{popupAdd ? <PopupAddUser popup={(e) => setPopupAdd(e)} /> : ''}

			<Box sx={{ p: 5 }}>
				<TableUser users={user} />
			</Box>
		</>
	);
};

export default PanelUser;
