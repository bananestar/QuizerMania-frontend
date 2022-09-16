import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, IconButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import RequestAvatar from '../../components/user/request/request-avatar';

const ProfilFormImg = () => {
	const { handleSubmit, register } = useForm();

	const [file, setSelectedFile] = useState();
	const [send, setSend] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	useEffect(() => {
		setSend(true);
	}, [file]);

	const onSubmit = ({ img }) => {
		console.log(img);
	};
	return (
		<>
			<Box align="center" justifyContent={'center'}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Container>
						<label htmlFor="upload-photo">
							<input
								style={{ display: 'none' }}
								id="upload-photo"
								name="upload-photo"
								type="file"
								onChange={changeHandler}
							/>

							<Button color="primary" variant="contained" component="span">
								Upload Photo
							</Button>
						</label>
						;
					</Container>
				</form>
				{send ? <RequestAvatar file={file} /> : ''}
			</Box>
		</>
	);
};

export default ProfilFormImg;
