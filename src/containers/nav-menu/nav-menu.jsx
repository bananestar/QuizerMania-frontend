import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import LogoutIcon from '@mui/icons-material/Logout';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { adminAtom, jwtAtom, userAtom, userIdAtom } from '../../atoms/jwtAtom';
import NavAvatar from './nav-avatar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	})
);

const NavMenu = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const [token, setToken] = useRecoilState(jwtAtom);
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const [isAdmin, setIsAdmin] = useRecoilState(adminAtom);
	const [user, setUser] = useRecoilState(userAtom);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleLogout = () => {
		setToken(null);
		navigate('/');
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component={NavLink}
						to="/"
						underline="none"
						color="inherit"
						style={{ textDecoration: 'none' }}
					>
						<img src="./quiz.png" alt="" style={{ maxWidth: '25px' }} />
						&nbsp; QuizerMania
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				{!token ? (
					<List>
						<ListItem
							key="sign up"
							disablePadding
							sx={{ display: 'block', color: 'inherit' }}
							component={Link}
							to="/registration"
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									<CreateIcon />
								</ListItemIcon>
								<ListItemText primary="Sign Up" sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
						<ListItem
							key="login"
							disablePadding
							sx={{ display: 'block', color: 'inherit' }}
							component={Link}
							to="/login"
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									<LoginIcon />
								</ListItemIcon>
								<ListItemText primary="Login" sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					</List>
				) : (
					<>
						<List>
							<ListItem
								key="Account"
								disablePadding
								sx={{ display: 'block', color: 'inherit' }}
								component={Link}
								to="/account"
							>
								<ListItemButton
									sx={{
										minWidth: 0,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									<ListItemIcon
										sx={{
											maxWidth: 10,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}
									>
										<NavAvatar />
									</ListItemIcon>
									<ListItemText primary="Account" sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
							<ListItem
								key="logout"
								disablePadding
								sx={{ display: 'block' }}
								onClick={handleLogout}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}
									>
										<LogoutIcon />
									</ListItemIcon>
									<ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
						</List>
						{isAdmin ? (
							<>
								<Divider />
								<List>
									<ListItem
										key="admin"
										disablePadding
										sx={{ display: 'block', color: 'inherit' }}
										component={Link}
										to="/admin"
									>
										<ListItemButton
											sx={{
												minHeight: 48,
												justifyContent: open ? 'initial' : 'center',
												px: 2.5,
											}}
										>
											<ListItemIcon
												sx={{
													minWidth: 0,
													mr: open ? 3 : 'auto',
													justifyContent: 'center',
												}}
											>
												<AdminPanelSettingsIcon sx={{ color: 'red' }} />
											</ListItemIcon>
											<ListItemText primary="Admin Mode" sx={{ opacity: open ? 1 : 0 }} />
										</ListItemButton>
									</ListItem>
								</List>
							</>
						) : (
							''
						)}
					</>
				)}
				<Divider />
				<List>
					<ListItem
						key="quiz"
						disablePadding
						sx={{ display: 'block', color: 'inherit' }}
						component={Link}
						to="/quiz"
					>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								<LensBlurIcon />
							</ListItemIcon>
							<ListItemText primary="Quiz" sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
					<ListItem
						key="score"
						disablePadding
						sx={{ display: 'block', color: 'inherit' }}
						component={Link}
						to="/score"
					>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								<ScoreboardIcon />
							</ListItemIcon>
							<ListItemText primary="Score" sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
			</Box>
		</Box>
	);
};

export default NavMenu;
