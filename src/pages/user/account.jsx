import { Box, CircularProgress, Container, Grid, Paper } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userIdAtom } from '../../atoms/jwtAtom';
import ProfilFormImg from '../../containers/user/profil-form-img';
import ProfilFormMail from '../../containers/user/profil-form-mail';
import ProfilFormPWD from '../../containers/user/profil-form-pwd';
import ProfilImg from '../../containers/user/profil-img';
import ProfilPseudo from '../../containers/user/profil-Pseudo';
import ProfilScore from '../../containers/user/profil-score';
import { useAccount } from '../../hooks/useRequest';

const classes = {
	root: {
		marginLeft: 30,
		flexGrow: 1,
	},
	paper: {
		padding: 20,
		textAlign: 'center',
		color: 'blue',
	},
};

const AccountPage = () => {
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const { user, isLoading, errors } = useAccount(userId);

	if (isLoading) {
		return <CircularProgress />;
	}
	if (errors) {
		console.error('-------------ERROR------------');
		console.error(errors);
		console.error('-------------ERROR------------');
		return (
			<Alert margin="dense" severity="error">
				{errors}
			</Alert>
		);
	}
	if (user) {
		return (
			<>
				<Box
					sx={{
						marginLeft: 30,
						flexGrow: 1,
						width: 2 / 4,
						maxWidth: 600,
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<ProfilImg />
						</Grid>
						<Grid item xs={6}>
							<ProfilPseudo />
						</Grid>
						<Grid item xs={6}>
							<ProfilFormImg />
						</Grid>
						<Grid item xs={6}>
							<ProfilFormMail />
							<br />
							<ProfilFormPWD />
						</Grid>
						<Grid item xs={12}>
							<ProfilScore />
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}
};

export default AccountPage;
