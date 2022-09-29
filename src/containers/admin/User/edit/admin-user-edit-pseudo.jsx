import { Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SaveIcon from '@mui/icons-material/Save';
import RequestUserPseudo from '../../../../components/admin/user/request/request-user-pseudo';

const AdminUserEditPseudo = ({ pseudo, userID }) => {
	const { handleSubmit, register } = useForm();
	const [send, setSend] = useState(false);
	const [currentPseudo, setCurrentPseudo] = useState(pseudo);
	const [errorMessagePseudo, setErrorMessagePseudo] = useState();

	const onSubmit = ({ currentPseudo }) => {
		if (!currentPseudo) {
			return console.error(`Pseudo :>> ${currentPseudo}`);
		}

		setSend(true);
	};

	useEffect(() => {
		if (!currentPseudo || currentPseudo.length === 0) {
			setErrorMessagePseudo('Pseudo is empty');
		}
		if (currentPseudo || currentPseudo.length > 0) {
			setErrorMessagePseudo('');
		}
	}, [currentPseudo]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			{send ? (
				<RequestUserPseudo pseudo={currentPseudo} userID={userID} />
			) : (
				<Grid container spacing={2}>
					<Grid item container direction="column" display="flex" justify="center">
						<TextField
							id="field1"
							label="Pseudo"
							margin="dense"
							size="small"
							variant="filled"
							helperText={errorMessagePseudo}
							error={errorMessagePseudo}
							value={currentPseudo}
							{...register('currentPseudo')}
							onChange={({ target }) => setCurrentPseudo(target.value)}
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
							Save Pseudo
						</Button>
					</Grid>
				</Grid>
			)}
		</form>
	);
};

export default AdminUserEditPseudo;
