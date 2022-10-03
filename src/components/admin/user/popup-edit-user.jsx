import {
	Avatar,
	Dialog,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import AdminUserEditAdmin from '../../../containers/admin/user/edit/admin-user-edit-admin';
import AdminUserEditAvatar from '../../../containers/admin/user/edit/admin-user-edit-avatar';
import AdminUserEditMail from '../../../containers/admin/user/edit/admin-user-edit-mail';
import AdminUserEditPseudo from '../../../containers/admin/user/edit/admin-user-edit-pseudo';
import AdminUserEditPwd from '../../../containers/admin/user/edit/admin-user-edit-pwd';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const PopupEditUser = ({ data: dt, popup }) => {
	const [open, setOpen] = useState(true);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleClose = () => {
		setOpen(false);
		popup(false);
	};

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="responsive-dialog-title" variant="h4">
					User Edit : {dt[0].pseudo}
				</DialogTitle>
				<DialogContent>
					<br />
					<Grid container spacing={3}>
						<Grid item>
							<Avatar
								alt={dt[0].pseudo + '_avatar'}
								src={dt[0].img}
								sx={{ width: 150, height: 150 }}
							/>
							<br />
							<AdminUserEditAvatar url={dt[0].img} userID={dt[0].userID} />
						</Grid>
						<Grid item>
							<Grid container direction="column" spacing={2}>
								<Grid item>UserID : {dt[0].userID}</Grid>
								<Grid item>
									<AdminUserEditPseudo pseudo={dt[0].pseudo} userID={dt[0].userID} />
								</Grid>
								<Grid item>
									<AdminUserEditMail email={dt[0].email} userID={dt[0].userID} />
								</Grid>
								<Grid item>
									<AdminUserEditPwd pwd={''} userID={dt[0].userID} />
								</Grid>
								<Grid item>
									<AdminUserEditAdmin isAdmin={dt[0].isAdmin} userID={dt[0].userID} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default PopupEditUser;
