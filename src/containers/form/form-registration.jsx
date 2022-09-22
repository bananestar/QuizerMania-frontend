import { Button, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { red } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { jwtAtom } from '../../atoms/jwtAtom';
import RequestUserRegistration from '../../components/user/request/request-user-registration';
import { useNavigate } from 'react-router-dom';

const FormRegistration = () => {
	const { handleSubmit, register } = useForm();

	const [pseudo, setPseudo] = useState(' ');
	const [mail, setMail] = useState(' ');
	const [currentPassword, setCurrentPassword] = useState();
	const [currentPasswordVerif, setCurrentPasswordVerif] = useState();
	const [registers, setRegisters] = useState();

	const [errorMessagePseudo, setErrorMessagePseudo] = useState('');
	const [errorMessageMail, setErrorMessageMail] = useState('');
	const [errorMessagePassword, setErrorMessagePassword] = useState('');
	const [errorMessagePasswordVerif, setErrorMessagePasswordVerif] = useState('');

	const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&=*])(?=.{8,})');

	const [token, setToken] = useRecoilState(jwtAtom);
    const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate('/');
		}
	}, [token]);

	const onSubmit = ({ pseudo, mail, currentPassword, currentPasswordVerif }) => {
		if (!pseudo || !mail || !currentPassword || !currentPasswordVerif) {
			console.error('---------Error---------');
			console.error(`pseudo :>> ${pseudo}`);
			console.error(`mail :>> ${mail}`);
			console.error(`currentPassword :>> ${currentPassword}`);
			console.error(`currentPasswordVerif :>> ${setCurrentPasswordVerif}`);
			console.error('-----------------------');
			return;
		}

		setRegisters({
			pseudo: pseudo,
			email: mail,
			password: currentPassword,
		});
	};

	useEffect(() => {
		if (pseudo.length <= 2) {
			setErrorMessagePseudo('Pseudo has too shorts');
		}
		if (pseudo.length > 50) {
			setErrorMessagePseudo('Pseudo has too longs');
		}
		if (pseudo.length > 0 && pseudo.length <= 50) {
			setErrorMessagePseudo('');
		}
	}, [pseudo]);

	useEffect(() => {
		if (mail.length <= 2) {
			setErrorMessageMail('Email has too shorts');
		}
		if (mail.length > 50) {
			setErrorMessageMail('Email has too longs');
		}
		if (mail.length > 0 && mail.length <= 50) {
			setErrorMessageMail('');
		}
	}, [mail]);

	useEffect(() => {
		if (currentPassword) {
			if (!regex.test(currentPassword)) {
				setErrorMessagePassword('Password incorrect');
			} else {
				setErrorMessagePassword('');
			}
		}
	}, [currentPassword]);

	useEffect(() => {
		if (currentPasswordVerif) {
			if (!regex.test(currentPasswordVerif)) {
				setErrorMessagePasswordVerif('Password incorrect');
			} else {
				if (currentPasswordVerif !== currentPassword) {
					setErrorMessagePasswordVerif('Passwords are not same');
				} else {
					setErrorMessagePasswordVerif('');
				}
			}
		}
	}, [currentPasswordVerif]);

	return (
		<>
			<Box display="flex" justifyContent="center" minHeight="100vh">
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<Container align="center">
						<h2>Registration</h2>
					</Container>

					<Container align="center">
                        {registers ? <RequestUserRegistration registers={registers} /> : ''}
                    </Container>

					<Container align="center">
						<TextField
							id="field1"
							label="Pseudo"
							margin="dense"
							size="small"
							variant="filled"
							helperText={errorMessagePseudo}
							error={errorMessagePseudo}
							{...register('pseudo')}
							onChange={({ target }) => setPseudo(target.value)}
							autoComplete="field1"
						/>
					</Container>

					<Container align="center">
						<TextField
							id="field2"
							label="Email"
							margin="dense"
							size="small"
							variant="filled"
							type="mail"
							helperText={errorMessageMail}
							error={errorMessageMail}
							{...register('mail')}
							onChange={({ target }) => setMail(target.value)}
							autoComplete="field2"
						/>
					</Container>

					<Container align="center">
						<TextField
							id="field3"
							label="Password"
							margin="dense"
							size="small"
							variant="filled"
							type="password"
							helperText={errorMessagePassword}
							error={errorMessagePassword}
							{...register('currentPassword')}
							onChange={({ target }) => setCurrentPassword(target.value)}
							autoComplete="new-password"
						/>
					</Container>

					<Container align="center">
						<TextField
							id="field4"
							label="Confirm password"
							margin="dense"
							size="small"
							variant="filled"
							type="password"
							helperText={errorMessagePasswordVerif}
							error={errorMessagePasswordVerif}
							{...register('currentPasswordVerif')}
							onChange={({ target }) => setCurrentPasswordVerif(target.value)}
							autoComplete="new-password"
						/>
					</Container>

					<Container>
						<Typography variant="caption" gutterBottom align="left">
							The password length must be greater than or equal to 8. <br />
							The password must contain one or more uppercase characters. <br />
							The password must contain one or more lowercase characters. <br />
							The password must contain one or more numeric values. <br />
							The password must contain one or more special characters (!@#$%^&=).
						</Typography>
					</Container>
                    <br />
					<Container align="center">
						<Button type="submit" margin="dense" size="small" variant="contained">
							Register
						</Button>
                        &nbsp;&nbsp;
                        <Button type="reset" margin="dense" size="small" variant="contained" sx={{ backgroundColor: red[500] }}>
							Reset
						</Button>
					</Container>
				</form>
			</Box>
		</>
	);
};

export default FormRegistration;
