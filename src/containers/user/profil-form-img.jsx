import { Box, Container } from '@mui/material';
import { useState } from 'react';
import RequestAvatar from '../../components/user/request/request-avatar';

const ProfilFormImg = () => {
	const [file, setFile] = useState();
	const [send, setSend] = useState(false);

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSend(true);
	};

	return (
		<>
			<Box justifyContent={'center'} sx={{ width: 250, height: 160 }}>
				<form onSubmit={handleSubmit}>
					<Container>
						<input type="file" onChange={handleOnChange} />
						<button type="submit">Upload File</button>
					</Container>
				</form>
				{send ? <RequestAvatar file={file} /> : ''}
			</Box>
		</>
	);
};

export default ProfilFormImg;
