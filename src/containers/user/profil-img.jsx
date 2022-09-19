import { Avatar, Box, CircularProgress } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom, userIdAtom } from '../../atoms/jwtAtom';
import { useAccount } from '../../hooks/useRequest';

const ProfilImg = () => {
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const { isLoading, errors } = useAccount(userId);
	const [user, setUser] = useRecoilState(userAtom);

	if (isLoading) {
		return <CircularProgress />;
	}
	return (
		<>
			<Box  align="center" justifyContent={'center'} sx={{ width: 250, height: 160 }} >
				<Avatar alt={user.pseudo} src={user.img} sx={{ width: 150, height: 150 }} />
			</Box>
		</>
	);
};

export default ProfilImg;
