import { Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SaveIcon from '@mui/icons-material/Save';
import RequestUserMail from '../../../../components/admin/user/request/request-user-mail';

const AdminUserEditMail = ({ email, userID }) => {
	const { handleSubmit, register } = useForm();
	const [send, setSend] = useState(false);
	const [currentEmail, setCurrentEmail] = useState(email);
	const [errorMessageEmail, setErrorMessageEmail] = useState();

	const onSubmit = ({ currentEmail }) => {
		if (!currentEmail) {
			return console.error(`Email :>> ${currentEmail}`);
		}

		setSend(true);
	};

	useEffect(() => {
		if (currentEmail.length <= 2) {
			setErrorMessageEmail('Email has too shorts');
		}
		if (currentEmail.length > 50) {
			setErrorMessageEmail('Email has too longs');
		}
		if (currentEmail.length > 0 && currentEmail.length <= 50) {
			setErrorMessageEmail('');
		}
	}, [currentEmail]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			{send ? (
				<RequestUserMail email={currentEmail} userID={userID} />
			) : (
				<Grid container spacing={2}>
					<Grid item container direction="column" display="flex" justify="center">
						<TextField
							id="field1"
							label="Email"
							margin="dense"
							size="small"
							variant="filled"
                            type='email'
							helperText={errorMessageEmail}
							error={errorMessageEmail}
							value={currentEmail}
							{...register('currentEmail')}
							onChange={({ target }) => setCurrentEmail(target.value)}
							autoComplete="field1"
						/>
					</Grid>
					<Grid item>
						<Button
							type="submit"
							margin="dense"
							size="small"
							variant="contained"
							endIcon={<SaveIcon />}
						>
							Save Email
						</Button>
					</Grid>
				</Grid>
			)}
		</form>
	);
};

export default AdminUserEditMail;
