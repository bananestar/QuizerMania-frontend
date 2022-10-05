import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import RequestAllDeletedScore from './request/request-all-deleted-score';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const PopupDeleteScore = ({ quizName, quizID, popup }) => {
	const [open, setOpen] = useState(true);
	const [send, setSend] = useState(false);

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
					Are you sure you want to delete this scoreboard ({quizName}) ?
				</DialogTitle>
				<br />
				<DialogContent>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						{send ? (
							<RequestAllDeletedScore quizID={quizID} />
						) : (
							<>
								<Button
									variant="contained"
									sx={{
										color: 'white',
										backgroundColor: 'red',
										'&:hover': {
											backgroundColor: 'darkred',
										},
									}}
									onClick={() => {
										setSend(true);
									}}
								>
									Yes
								</Button>
								&nbsp;&nbsp;&nbsp;
								<Button variant="contained" onClick={handleClose}>
									No
								</Button>
							</>
						)}
					</Box>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						<CloseIcon />
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default PopupDeleteScore;
