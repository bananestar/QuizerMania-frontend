import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/jwtAtom';
import { Box, Container } from '@mui/system';
import { IconButton, TextField } from '@mui/material';
import bcrypt from 'bcryptjs';

import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SendIcon from '@mui/icons-material/Send';
import RequestUserPWD from '../../components/user/request/request-user-pwd';

const ProfilFormPWD = () => {
	const [user, setUser] = useRecoilState(userAtom);
	const [currentPassword, setCurrentPassword] = useState();
	const [newPassword, setNewPassword] = useState();
	const [lock, setLock] = useState(true);
	const [send, setSend] = useState(false);

	const [errorMessagePassword, setErrorMessagePassword] = useState('');
	const [errorMessagePasswordVerif, setErrorMessagePasswordVerif] = useState('');

	const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&=*])(?=.{8,})');

	const { handleSubmit, register } = useForm();

	const onSubmit = async ({ currentPassword, newPassword }) => {
		const comparePWD = await bcrypt.compare(currentPassword, user.password);
		if (comparePWD) {
			setNewPassword(newPassword)
			setSend(true)
		}else{
			setErrorMessagePassword('Password incorrect');
			setErrorMessagePasswordVerif('Password incorrect');
			setSend(false)
		}
	};

	const handleLock = () => {
		setLock(!lock);
	};

	useEffect(() => {
		if (newPassword) {
			if (!regex.test(newPassword)) {
				setErrorMessagePassword('Password incorrect');
			} else {
				setErrorMessagePassword('');
			}
		}
	}, [newPassword]);

	useEffect(() => {
		if (currentPassword) {
			if (!regex.test(currentPassword)) {
				setErrorMessagePasswordVerif('Password incorrect');
			} else {
				setErrorMessagePasswordVerif('');
			}
		}
	}, [currentPassword]);

	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<Container>
					<TextField
					disabled={lock}
						id="field2"
						label="Password"
						margin="dense"
						size="small"
						variant="filled"
						type="password"
						helperText={errorMessagePasswordVerif}
						error={errorMessagePasswordVerif}
						{...register('currentPassword')}
						onChange={({ target }) => setCurrentPassword(target.value)}
						autoComplete="new-password"
					/>
				</Container>
				<Container>
					<TextField
					disabled={lock}
						id="field3"
						label="New Password"
						margin="dense"
						size="small"
						variant="filled"
						type="password"
						helperText={errorMessagePassword}
						error={errorMessagePassword}
						{...register('newPassword')}
						onChange={({ target }) => setNewPassword(target.value)}
						autoComplete="new-password"
					/>
				</Container>
				<Container>
					<IconButton onClick={() => handleLock()}>
						{lock ? <LockIcon /> : <LockOpenIcon />}
					</IconButton>
					<IconButton disabled={lock} type="submit">
						<SendIcon />
					</IconButton>
				</Container>
			</form>
			{send ? <RequestUserPWD newPassword={newPassword} /> : ''}
		</Box>
	);
};

export default ProfilFormPWD;
