import {
	AppBar,
	Box,
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
						<Grid container>
							<Grid item>
								<Stack direction="row" spacing={2} sx={{ px: 2.5 }}>
									<Typography
										component={NavLink}
										to="/admin"
										style={{ textDecoration: 'none', color: 'red' }}
									>
										Mode Admin
									</Typography>
									<Typography
										component={NavLink}
										to="user-panel"
										style={{ textDecoration: 'none', color: 'inherit' }}
									>
										User Panel
									</Typography>
									<Typography
										component={NavLink}
										to="quiz-panel"
										style={{ textDecoration: 'none', color: 'inherit' }}
									>
										Quiz Panel
									</Typography>
									<Typography
										component={NavLink}
										to="score-panel"
										style={{ textDecoration: 'none', color: 'inherit' }}
									>
										Score Panel
									</Typography>
								</Stack>
							</Grid>
						</Grid>

						<Stack direction="row" spacing={2} sx={{ px: 2.5 }} justifyContent="end">
							<Typography
								component={NavLink}
								to="/"
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								Return On Site
							</Typography>
						</Stack>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	);
};

export default AdminNavMenu;
