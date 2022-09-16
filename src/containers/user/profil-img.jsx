import { Avatar, Box, CircularProgress } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userAtom, userIdAtom } from '../../atoms/jwtAtom';
import { useAccount } from '../../hooks/useRequest';

const ProfilImg = () => {
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const { isLoading, errors } = useAccount(userId);
	const [user, setUser] = useRecoilState(userAtom);
	console.log(user);

	if (isLoading) {
		return <CircularProgress />;
	}
	return (
		<>
			<Box sx={{ width: 250, height: 160 ,border: 1, borderBlockColor: 'black' }} align="center" justifyContent={"center"}>
				<Avatar alt={user.pseudo} src={user.img} sx={{ width: 150, height: 150 }} />
			</Box>
		</>
	);
};

export default ProfilImg;

// {
//     "userID": "3796792b-add7-4416-8ec8-2c10629e02bc",
//     "pseudo": "bananestar",
//     "email": "s.vanderlinden13@gmail.com",
//     "password": "$2b$10$GtLdVszsJV7k1JUET8jdSOBCpNCDBR0XJYKVlecfFcV3vz19DBj6K",
//     "img": "https://firebasestorage.googleapis.com/v0/b/quizermania-f7be1.appspot.com/o/bv2.jpg?alt=media&token=5c0fc6fc-1cc3-4b30-9c56-05fdc3d15a45",
//     "isAdmin": true,
//     "createdAt": "2022-09-15T07:17:12.000Z",
//     "updatedAt": "2022-09-15T07:17:12.000Z"
// }
