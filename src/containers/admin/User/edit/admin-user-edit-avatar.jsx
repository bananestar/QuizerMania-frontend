import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import RequestUserAvatar from '../../../../components/admin/user/request/request-user-avatar';

const AdminUserEditAvatar = ({ url, userID }) => {
	const [file, setFile] = useState();
	const [send, setSend] = useState(false);

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = () => {
		setSend(true);
	};

	return (
		<>
			<Box justifyContent={'center'} >
				<form onSubmit={handleSubmit}>
					<form onSubmit={handleSubmit}>
						<Container>
							<input type="file" onChange={handleOnChange} />
							<Button onClick={()=>{handleSubmit()}}>
								Upload File
							</Button>
						</Container>
					</form>
					{send ? <RequestUserAvatar file={file} url={url} userID={userID} /> : ''}
				</form>
			</Box>
		</>
	);
};
export default AdminUserEditAvatar;
