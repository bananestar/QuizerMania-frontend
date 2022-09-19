import { Box, CircularProgress } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom, userIdAtom } from '../../atoms/jwtAtom';
import { useAccount } from '../../hooks/useRequest';

const ProfilPseudo = () => {
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const { isLoading, errors } = useAccount(userId);
	const [user, setUser] = useRecoilState(userAtom);

	if (isLoading) {
		return <CircularProgress />;
	}
	return (
		<>
			<Box align="center" justifyContent={'center'} sx={{ width: 250, height: 160 }} >
				<h1>{user.pseudo}</h1>
				<h2>{new Date(user.createdAt).toLocaleDateString('fr-FR')}</h2>
			</Box>
		</>
	);
};
export default ProfilPseudo;
