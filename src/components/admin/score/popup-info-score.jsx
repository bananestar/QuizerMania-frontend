import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef, useState } from 'react';
import AdminScoreList from '../../../containers/admin/score/info/admin-score-list';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const PopupInfoScore = ({ score: dt, popup }) => {
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
				maxWidth={true}
				onClose={handleClose}
				TransitionComponent={Transition}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="responsive-dialog-title" variant="h4">
					Score Info : {dt.name}
				</DialogTitle>
				<DialogContent>
					<br />
					<Grid container spacing={3}>
						<Grid item xs={12}>quizID : {dt.quizID} </Grid>
						<Grid item xs={12}>
							<AdminScoreList scores={dt.scores} />
						</Grid>
					</Grid>
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

export default PopupInfoScore;
