import { Box, Container, IconButton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/jwtAtom';

import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SendIcon from '@mui/icons-material/Send';
import RequestMail from '../../components/user/request/request-mail';

const ProfilFormMail = () => {
	const [user, setUser] = useRecoilState(userAtom);
	const [mail, setMail] = useState(user.email);
	const [errorMessageMail, setErrorMessageMail] = useState('');
	const [lock, setLock] = useState(true);
	const [send, setSend] = useState(false);

	const { handleSubmit, register } = useForm();

	const handleLock = () => {
		setLock(!lock);
	};

	const onSubmit = (data) => {
		const email = data.mail;
		if (email !== undefined) {
			setMail(email);
		}
		if (email && mail) {
			setSend(true);
		}
	};

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

	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<Container>
					<TextField
						disabled={lock}
						id="field1"
						label="Email"
						margin="dense"
						size="small"
						variant="filled"
						helperText={errorMessageMail}
						error={errorMessageMail}
						value={mail}
						type="mail"
						{...register('mail')}
						onChange={({ target }) => setMail(target.value)}
						autoComplete="field1"
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
			{send ? <RequestMail mail={mail} /> : ''}
		</Box>
	);
};

export default ProfilFormMail;
