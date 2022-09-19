import { Box, CircularProgress, Container, Grid } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userIdAtom } from '../../atoms/jwtAtom';
import ProfilFormImg from '../../containers/user/profil-form-img';
import ProfilFormMail from '../../containers/user/profil-form-mail';
import ProfilFormPWD from '../../containers/user/profil-form-pwd';
import ProfilImg from '../../containers/user/profil-img';
import ProfilPseudo from '../../containers/user/profil-Pseudo';
import ProfilScore from '../../containers/user/profil-score';
import { useAccount } from '../../hooks/useRequest';

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
					}}
				>
					<Grid container rowSpacing={1} columnSpacing={{  }}>
						<Grid xs={3}>
							<ProfilImg />
						</Grid>
						<Grid xs={9}>
							<ProfilPseudo />
						</Grid>
						<Grid xs={3}>
							<ProfilFormImg />
						</Grid>
						<Grid xs={6}>
							<ProfilFormMail />
							<br />
							<ProfilFormPWD />
						</Grid>
						<Grid xs={12}>
						<ProfilScore/>
						</Grid>
						<Grid xs={12}>
							Activités
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}
};

export default AccountPage;
