import { Avatar, Button, IconButton, TableCell, TableRow } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TableUserRow = ({ data }) => {
	console.log(data);
	return (
		<TableRow key={data[0].userID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
			<TableCell> {data[0].userID} </TableCell>
			<TableCell>
				<Avatar alt={data[0].pseudo+'_avatar'} src={data[0].img} />
			</TableCell>
			<TableCell> {data[0].pseudo} </TableCell>
			<TableCell>
				{data[0].isAdmin ? <AdminPanelSettingsIcon sx={{ color: 'red' }} /> : <PersonIcon />}
			</TableCell>
			<TableCell>{new Date(data[0].createdAt).toLocaleDateString('fr-FR')}</TableCell>
			<TableCell>{new Date(data[0].updatedAt).toLocaleDateString('fr-FR')}</TableCell>
			<TableCell>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<IconButton>
					<EditIcon />
				</IconButton>
				<IconButton>
					<DeleteForeverIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

export default TableUserRow;
