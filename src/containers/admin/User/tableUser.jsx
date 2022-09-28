import {
	createTheme,
	CssBaseline,
	InputAdornment,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	ThemeProvider,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import TableUserRow from './tableUserRow';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const TableUser = ({ users }) => {
	const [allUser, setAllUser] = useState(users);
	const [backupUser, setBackupUser] = useState(users);

	const searchUser = (value) => {
		if (value.length <= 0) {
			setAllUser(backupUser);
		} else {
			const newUsers = allUser.filter((user) => {
				switch (true) {
					case user.userID.toLowerCase().startsWith(value.toLowerCase()):
						return user;
					case user.pseudo.toLowerCase().startsWith(value.toLowerCase()):
						return user;
					case user.email.toLowerCase().startsWith(value.toLowerCase()):
						return user;
					case new Date(user.createdAt).toLocaleDateString('fr-FR').startsWith(value.toLowerCase()):
						return user;
					case new Date(user.updatedAt).toLocaleDateString('fr-FR').startsWith(value.toLowerCase()):
						return user;
					case value === 'admin:true':
						if (user.isAdmin) {
							return user;
						}
				}
			});
			setAllUser(newUsers);
		}
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<TextField
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				label="Search"
				variant="outlined"
				onChange={({ target }) => searchUser(target.value)}
			/>
			<br />
			<br />
			<TableContainer component={Paper} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.16)' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Avatar</TableCell>
							<TableCell>Pseudo</TableCell>
							<TableCell>isAdmin</TableCell>
							<TableCell>Created At</TableCell>
							<TableCell>Updated At</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{allUser.map(({ userID, img, pseudo, isAdmin, createdAt, updatedAt }) => {
							return (
								<TableUserRow data={[{ userID, img, pseudo, isAdmin, createdAt, updatedAt }]} />
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
};

export default TableUser;
