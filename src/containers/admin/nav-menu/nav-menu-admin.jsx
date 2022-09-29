import {
	AppBar,
	Box,
	Button,
	CssBaseline,
	Grid,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1976d2',
		},
	},
});

const AdminNavMenu = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Grid container direction="row" sx={{ px: 2.5 }}>
							<Grid item sx={{ flexGrow: '1' }}>
								<Stack direction="row" spacing={2}>
									<Button
										component={NavLink}
										to="/admin"
										variant="outlined"
										sx={{
											color: 'red',
											borderColor: 'red',
											'&:hover': {
												borderColor: 'darkred',
												backgroundColor: 'darkred',
												color: 'black',
											},
										}}
									>
										Mode Admin
									</Button>
									<Button
										component={NavLink}
										to="user-panel"
										variant="outlined"
										sx={{
											color: 'white',
											borderColor: 'gray',
											'&:hover': {
												borderColor: 'white',
												backgroundColor: '#eeeeee',
												color: 'black',
											},
										}}
									>
										User Panel
									</Button>
									<Button
										component={NavLink}
										to="quiz-panel"
										variant="outlined"
										sx={{
											color: 'white',
											borderColor: 'gray',
											'&:hover': {
												borderColor: 'white',
												backgroundColor: '#eeeeee',
												color: 'black',
											},
										}}
									>
										Quiz Panel
									</Button>
									<Button
										component={NavLink}
										to="score-panel"
										variant="outlined"
										sx={{
											color: 'white',
											borderColor: 'gray',
											'&:hover': {
												borderColor: 'white',
												backgroundColor: '#eeeeee',
												color: 'black',
											},
										}}
									>
										Score Panel
									</Button>
								</Stack>
							</Grid>
							<Grid item xs={1}>
								<Button
									component={NavLink}
									to="/"
									variant="outlined"
									sx={{
										color: 'green',
										borderColor: 'green',
										'&:hover': {
											borderColor: 'darkgreen',
											backgroundColor: 'green',
											color: 'black',
										},
									}}
								>
									Return On site
								</Button>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	);
};

export default AdminNavMenu;
