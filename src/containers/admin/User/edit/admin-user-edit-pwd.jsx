import { Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SaveIcon from '@mui/icons-material/Save';
import RequestUserPwd from '../../../../components/admin/user/request/request-user-pwd';

const AdminUserEditPwd = ({ pwd, userID }) => {
	const { handleSubmit, register } = useForm();
	const [send, setSend] = useState(false);
	const [currentPassword, setCurrentPassword] = useState(pwd);
	const [errorMessagePassword, setErrorMessagePassword] = useState();

	const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&=*])(?=.{8,})');

	const onSubmit = ({ currentPassword }) => {
		if (!currentPassword) {
			return console.error(`Password :>> ${currentPassword}`);
		}

		setSend(true);
	};

	useEffect(() => {
		if (currentPassword) {
			if (!regex.test(currentPassword)) {
				setErrorMessagePassword('Password incorrect');
			} else {
				setErrorMessagePassword('');
			}
		}
	}, [currentPassword]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			{send ? (
				<RequestUserPwd pwd={currentPassword} userID={userID} />
			) : (
				<Grid container spacing={2}>
					<Grid item container direction="column" display="flex" justify="center">
						<TextField
							id="field1"
							label="Password"
							margin="dense"
							size="small"
							variant="filled"
							type="password"
							helperText={errorMessagePassword}
							error={errorMessagePassword}
							value={currentPassword}
							{...register('currentPassword')}
							onChange={({ target }) => setCurrentPassword(target.value)}
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
							Save Password
						</Button>
					</Grid>
				</Grid>
			)}
		</form>
	);
};

export default AdminUserEditPwd;
