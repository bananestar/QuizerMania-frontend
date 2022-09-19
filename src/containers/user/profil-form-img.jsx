import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, IconButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Controller, set, useForm } from 'react-hook-form';
import RequestAvatar from '../../components/user/request/request-avatar';

const ProfilFormImg = () => {
	// const { handleSubmit, register } = useForm();

	const [file, setFile] = useState();
	const [send, setSend] = useState(false);

	// const onSubmit = (data) => {
	// 	const formData = new FormData();
	// 	formData.append('file', data.file[0]);
	// 	setSelectedFile(formData);
	// };

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSend(true)
	}

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
