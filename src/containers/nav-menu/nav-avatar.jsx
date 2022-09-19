import { Avatar, CircularProgress } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom, userIdAtom } from '../../atoms/jwtAtom';
import { useAccount } from '../../hooks/useRequest';

const NavAvatar = () => {
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const { isLoading, errors } = useAccount(userId);
	const [user, setUser] = useRecoilState(userAtom);

	if (isLoading) {
		return <CircularProgress />;
	}

	return (
		<>
			<Avatar alt={user.pseudo} src={user.img} />
		</>
	);
};

export default NavAvatar
