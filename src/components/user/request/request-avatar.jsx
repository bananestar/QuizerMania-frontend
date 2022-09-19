import { Alert, CircularProgress } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userIdAtom } from '../../../atoms/jwtAtom';
import { useUpdatedAccount } from '../../../hooks/useRequest';

const RequestAvatar = ({ file }) => {
	const [userId, setUserId] = useRecoilState(userIdAtom);

	if (file) {
		// const formData = new FormData();
		// formData.append('avatar', file);
		// console.log(formData.get('avatar'));
		const { data, isLoading, errors } = useUpdatedAccount(file);

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
			window.location.reload()
		}
		return <></>;
	}
};
export default RequestAvatar;
