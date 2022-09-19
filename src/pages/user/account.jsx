import { Box, Container } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userIdAtom } from '../../atoms/jwtAtom';
import ProfilFormImg from '../../containers/user/profil-form-img';
import ProfilImg from '../../containers/user/profil-img';
import ProfilPseudo from '../../containers/user/profil-Pseudo';
import { useAccount } from '../../hooks/useRequest';

const AccountPage = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					marginLeft: 30,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<ProfilImg />
					<ProfilPseudo />
					{/* <h1>Score</h1> */}
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<Container sx={{ width: 250, marginLeft: 0, margin: 0 }}>
						<ProfilFormImg />
					</Container>
					<Container sx={{ width: 250, marginLeft: 0, margin: 0 }}>
						{/* <Box sx={{ width: 250, height: 160 }}>
							<h1>form mail</h1>
							<h1>form mdp</h1>
						</Box> */}
					</Container>
					{/* <h1>Activité</h1> */}
				</Box>
			</Box>
		</>
	);
};

export default AccountPage;
