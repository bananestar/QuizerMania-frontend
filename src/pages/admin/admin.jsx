import { Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { bearerSelector } from '../../atoms/jwtAtom';

const AdminPage = () => {
	const [token, setToken] = useRecoilState(bearerSelector);
	return (
		<Box>
			<h1>Admin Panel</h1>
			{token}
		</Box>
	);
};

export default AdminPage;
