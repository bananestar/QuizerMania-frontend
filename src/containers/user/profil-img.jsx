import { Avatar, Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms/jwtAtom';

const ProfilImg = () => {
	const [user, setUser] = useRecoilState(userAtom);
	return (
		<>
			<Box align="center" justifyContent={'center'} sx={{ width: 250, height: 160 }}>
				<Avatar alt={user.pseudo} src={user.img} sx={{ width: 150, height: 150 }} />
			</Box>
		</>
	);
};

export default ProfilImg;
