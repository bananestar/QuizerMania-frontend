import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { jwtAtom } from '../../atoms/jwtAtom';
import RequestUserLogin from '../../components/user/request/request-user-login';

const FormLogin = () => {
	const { handleSubmit, register } = useForm();

	const [identifier, setIdentifier] = useState(' ');
	const [identifiers, setIdentifiers] = useState();
	const [currentPassword, setCurrentPassword] = useState(' ');

	const [errorMessageIdentifier, setErrorMessageIdentifier] = useState('');
	const [errorMessagePassword, setErrorMessagePassword] = useState('');

	const [token, setToken] = useRecoilState(jwtAtom);
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate('/');
		}
	}, [token]);

	const onSubmit = ({ identifier, currentPassword }) => {
		if (!identifier || !currentPassword) {
			return console.error(`identifier :>> ${identifier} \n password :>> ${currentPassword}`);
		}

		setIdentifier(identifier);
		setCurrentPassword(currentPassword);

		setIdentifiers({
			identifier: identifier,
			password: currentPassword,
		});
	};

	useEffect(() => {
		if (!identifier || identifier.length === 0) {
			setErrorMessageIdentifier('identifier is empty');
		}
		if (identifier || identifier.length > 0) {
			setErrorMessageIdentifier('');
		}
	}, [identifier]);

	useEffect(() => {
		if (!currentPassword || currentPassword.length === 0) {
			setErrorMessagePassword('password is empty');
		}
		if (currentPassword || currentPassword.length > 0) {
			setErrorMessagePassword('');
		}
	}, [identifier]);

	return (
		<>
			<Box display="flex" justifyContent="center" minHeight="100vh">
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<Container align="center">
						<h2>Login</h2>
					</Container>

					<Container align="center">
						{identifiers ? <RequestUserLogin identifiers={identifiers} /> : ''}
					</Container>

					<Container>
						<TextField
							id="field1"
							label="Email / Pseudo"
							margin="dense"
							size="small"
							variant="filled"
							helperText={errorMessageIdentifier}
							error={errorMessageIdentifier.length > 0}
							{...register('identifier')}
							onChange={({ target }) => setIdentifier(target.value)}
							autoComplete="field1"
						/>
					</Container>

					<Container>
						<TextField
							id="field2"
							label="Password"
							margin="dense"
							size="small"
							variant="filled"
							type="password"
							helperText={errorMessagePassword}
							error={errorMessagePassword.length > 0}
							{...register('currentPassword')}
							onChange={({ target }) => setCurrentPassword(target.value)}
							autoComplete="new-password"
						/>
					</Container>
					<br />
					<Container align="center">
						<Button type="submit" margin="dense" size="small" variant="contained">
							Connection
						</Button>
					</Container>
				</form>
			</Box>
		</>
	);
};

export default FormLogin;
