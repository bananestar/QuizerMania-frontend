import { Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/jwtAtom';

const ProfilPseudo = () => {
	const [user, setUser] = useRecoilState(userAtom);
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
