import { Avatar, IconButton, TableCell, TableRow } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PopupInfoUser from '../../../components/admin/popup-info-user';
import { useState } from 'react';
import PopupEditUser from '../../../components/admin/popup-edit-user';
import PopupDeleteUser from '../../../components/admin/popup-delete-user';

const TableUserRow = ({ data }) => {
	const [popupInfo, setPopupInfo] = useState(false);
	const [popupEdit, setPopupEdit] = useState(false);
	const [popupDelete, setPopupDelete] = useState(false);
	return (
		<TableRow key={data[0].userID}>
			<TableCell> {data[0].userID} </TableCell>
			<TableCell>
				<Avatar alt={data[0].pseudo + '_avatar'} src={data[0].img} />
			</TableCell>
			<TableCell> {data[0].pseudo} </TableCell>
			<TableCell>
				{data[0].isAdmin ? <AdminPanelSettingsIcon sx={{ color: 'red' }} /> : <PersonIcon />}
			</TableCell>
			<TableCell>{new Date(data[0].createdAt).toLocaleDateString('fr-FR')}</TableCell>
			<TableCell>{new Date(data[0].updatedAt).toLocaleDateString('fr-FR')}</TableCell>
			<TableCell>
				<IconButton
					onClick={() => {
						setPopupInfo(true);
					}}
				>
					<SearchIcon />
				</IconButton>
				<IconButton
					onClick={() => {
						setPopupEdit(true);
					}}
				>
					<EditIcon />
				</IconButton>
				<IconButton
					onClick={() => {
						setPopupDelete(true);
					}}
				>
					<DeleteForeverIcon />
				</IconButton>
			</TableCell>
			{popupInfo ? <PopupInfoUser data={data} popup={(e) => setPopupInfo(e)} /> : ''}
			{popupEdit ? <PopupEditUser data={data} popup={(e) => setPopupEdit(e)} /> : ''}
			{popupEdit ? <PopupDeleteUser data={data} popup={(e) => setPopupEdit(e)} /> : ''}
		</TableRow>
	);
};

export default TableUserRow;
