import {
	Box,
	Button,
	createTheme,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	TextField,
	ThemeProvider,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import RequestUserAdd from './user/request/request-user-add';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const PopupAddUser = ({ popup }) => {
	const { handleSubmit, register } = useForm();
	const [open, setOpen] = useState(true);
	const [send, setSend] = useState(false);

	const [data, setData] = useState();

	const [pseudo, setPseudo] = useState(' ');
	const [errorMessagePseudo, setErrorMessagePseudo] = useState('');

	const [email, setEmail] = useState(' ');
	const [errorMessageEmail, setErrorMessageEmail] = useState();

	const [password, setPassword] = useState('');
	const [errorMessagePassword, setErrorMessagePassword] = useState();

	const [isAdmin, setIsAdmin] = useState(false);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&=*])(?=.{8,})');

	useEffect(() => {
		if (!pseudo || pseudo.length === 0) {
			setErrorMessagePseudo('Pseudo is empty');
		}
		if (pseudo || pseudo.length > 0) {
			setErrorMessagePseudo('');
		}
	}, [pseudo]);
	useEffect(() => {
		if (email.length <= 2) {
			setErrorMessageEmail('Email has too shorts');
		}
		if (email.length > 50) {
			setErrorMessageEmail('Email has too longs');
		}
		if (email.length > 0 && email.length <= 50) {
			setErrorMessageEmail('');
		}
	}, [email]);
	useEffect(() => {
		if (password) {
			if (!regex.test(password)) {
				setErrorMessagePassword('Password incorrect');
			} else {
				setErrorMessagePassword('');
			}
		}
	}, [password]);

	const handleClose = () => {
		setOpen(false);
		popup(false);
	};

	const onSubmit = ({ pseudo, email, password }) => {
		if (!pseudo || !email || !password || typeof isAdmin === 'undefined') {
			console.error(`Pseudo :>> ${pseudo}`);
			console.error(`Email :>> ${email}`);
			console.error(`Password :>> ${password}`);
			console.error(`isAdmin :>> ${isAdmin}`);
			return;
		}

		const dt = { pseudo: pseudo, email: email, password: password, isAdmin: isAdmin };
		setData(dt);
		setSend(true);
	};

	return (
		<div>
			<ThemeProvider theme={darkTheme}>
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					TransitionComponent={Transition}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogTitle id="responsive-dialog-title" variant="h4">
						Add User
					</DialogTitle>
					<DialogContent>
						{send ? (
							<RequestUserAdd dt={data} />
						) : (
							<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
								<Grid container direction="column" spacing={2}>
									<Grid item>
										<TextField
											id="field1"
											label="Pseudo"
											margin="dense"
											size="small"
											variant="filled"
											helperText={errorMessagePseudo}
											error={errorMessagePseudo}
											value={pseudo}
											{...register('pseudo')}
											onChange={({ target }) => setPseudo(target.value)}
											autoComplete="field1"
										/>
									</Grid>
									<Grid item>
										<TextField
											id="field2"
											label="Email"
											margin="dense"
											size="small"
											variant="filled"
											type="email"
											helperText={errorMessageEmail}
											error={errorMessageEmail}
											value={email}
											{...register('email')}
											onChange={({ target }) => setEmail(target.value)}
											autoComplete="field2"
										/>
									</Grid>
									<Grid item>
										<TextField
											id="field3"
											label="Password"
											margin="dense"
											size="small"
											variant="filled"
											type="password"
											helperText={errorMessagePassword}
											error={errorMessagePassword}
											value={password}
											{...register('password')}
											onChange={({ target }) => setPassword(target.value)}
											autoComplete="field3"
										/>
									</Grid>
									<Grid item>
										isAdmin :&nbsp;
										<Button
											variant="outlined"
											onClick={() => {
												setIsAdmin(!isAdmin);
											}}
										>
											{isAdmin ? 'true' : 'false'}
										</Button>
									</Grid>
								</Grid>
								<br />
								<Box sx={{ display: 'flex', justifyContent: 'center' }}>
									<Button variant="contained" endIcon={<SaveIcon />} type='submit'>
										Add
									</Button>
								</Box>
							</form>
						)}
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose}>
							<CloseIcon />
						</Button>
					</DialogActions>
				</Dialog>
			</ThemeProvider>
		</div>
	);
};

export default PopupAddUser;
