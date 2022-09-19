import { Alert, CircularProgress } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom, userIdAtom } from '../../../atoms/jwtAtom';
import { useUpdated } from '../../../hooks/useRequest';

const RequestMail = ({ mail }) => {
	const URL_USER = import.meta.env.VITE_API_USERS;
	const [user, setUser] = useRecoilState(userAtom);
	const [userId, setUserId] = useRecoilState(userIdAtom);
	console.log(user);
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
export default RequestMail;

// {
//     "userID": "7f2317f7-e9b9-4bf2-8b96-933e4c4e8b94",
//     "pseudo": "bananestar",
//     "email": "s.vanderlinden13@gmail.com",
//     "password": "$2b$10$kqayzFZhzVqK5jNedWrhJ.0dbr/axb9Ir6Hkzts61uHS9zVlkTJfW",
//     "img": "https://storage.googleapis.com/quizermania-f7be1.appspot.com/454545_Profil183558d2e65.png",
//     "isAdmin": true,
//     "createdAt": "2022-09-14T11:20:10.000Z",
//     "updatedAt": "2022-09-19T11:40:59.000Z"
// }
