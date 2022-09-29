import { Alert, CircularProgress } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom, userIdAtom } from '../../../atoms/jwtAtom';
import { useUpdated } from '../../../hooks/useRequest';

const RequestUserMail = ({ mail }) => {
	const URL_USER = import.meta.env.VITE_API_USERS;
	const [user, setUser] = useRecoilState(userAtom);
	const [userId, setUserId] = useRecoilState(userIdAtom);

	if (mail) {
		const datas = {
			userID: user.userID,
			email: mail,
		};
		
		const { data, isLoading, errors } = useUpdated(URL_USER, datas, userId);
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
		if (data) {
			window.location.reload();
		}
	}
};
export default RequestUserMail;