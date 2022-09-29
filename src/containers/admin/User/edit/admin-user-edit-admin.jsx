import { Button } from '@mui/material';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import RequestUserMail from '../../../../components/admin/user/request/request-user-isAdmin';

const AdminUserEditAdmin = ({ isAdmin, userID }) => {
    console.log(userID);
	const [admin, setAdmin] = useState(isAdmin);
	const [send, setSend] = useState(false);

	const handleSwitchAdmin = () => {
		setAdmin(!admin);
	};

	const handleSubmit = () => {
		setSend(true);
	};

	return (
		<div>
			{send ? (
				<RequestUserMail isAdmin={admin} userID={userID} />
			) : (
				<>
					<div>
						isAdmin :
						<Button
							variant="outlined"
							onClick={() => {
								handleSwitchAdmin();
							}}
						>
							{admin ? 'true' : 'false'}{' '}
						</Button>
					</div>
					<br />
					<Button
						type="submit"
						margin="dense"
						size="small"
						variant="contained"
						endIcon={<SaveIcon />}
						onClick={() => {
							handleSubmit();
						}}
					>
						Save isAdmin
					</Button>
				</>
			)}
		</div>
	);
};

export default AdminUserEditAdmin;
