import { Alert, CircularProgress } from '@mui/material';
import { useUpdatedAccount } from '../../../../hooks/useRequest';



const RequestUserAvatar = ({ file, url, userID }) => {
	if (file) {
		// const testUrl = url.substring(0, 28);

		// if (testUrl !== 'https://cloudflare-ipfs.com/') {
		// 	const pictureRef = storage.refFromURL(url);

		// 	pictureRef
		// 		.delete()
		// 		.then(() => {
		// 			setImages(allImages.filter((image) => image !== url));
		// 			console.log('Picture is deleted successfully!');
		// 		})
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
		// }

		const { data, isLoading, errors } = useUpdatedAccount(file, userID);

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
		return <></>;
	}
};

export default RequestUserAvatar;
