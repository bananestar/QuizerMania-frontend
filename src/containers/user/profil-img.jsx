import { Avatar } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/jwtAtom';

const ProfilImg = () => {
	const [user, setUser] = useRecoilState(userAtom);
	return (
		<>
			<Avatar alt={user.pseudo} src={user.img} sx={{ width: 150, height: 150 }} />
		</>
	);
};

export default ProfilImg;
