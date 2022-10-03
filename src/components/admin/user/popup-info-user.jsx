import {
	Alert,
	Avatar,
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Paper,
	Slide,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import { forwardRef, useState } from 'react';
import { useQuery } from '../../../hooks/useRequest';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const PopupInfoUser = ({ data: dt, popup }) => {
	const [open, setOpen] = useState(true);
	const url = import.meta.env.VITE_API_SCORE + 'byUser/';
	const { data, isLoading, errors } = useQuery(url, dt[0].userID);

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
					User Info : {dt[0].pseudo}
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
						</Grid>
						<Grid item>
							<Grid container direction="column" spacing={2}>
								<Grid item>UserID : {dt[0].userID}</Grid>
								<Grid item>Pseudo : {dt[0].pseudo}</Grid>
								<Grid item>Email : {dt[0].email}</Grid>
								<Grid item>IsAdmin : {dt[0].isAdmin ? 'true' : 'false'}</Grid>
								<Grid item>
									CreatedAt : {new Date(dt[0].createdAt).toLocaleDateString('fr-FR')}
								</Grid>
								<Grid item>
									UpdatedAt : {new Date(dt[0].updatedAt).toLocaleDateString('fr-FR')}
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{isLoading ? (
						<CircularProgress />
					) : errors ? (
						<Alert margin="dense" severity="error">
							{errors}
						</Alert>
					) : (
						<>
							<Box display="flex" justifyContent="center" flexDirection="column">
								<h3>
									Score <ScoreboardIcon />
								</h3>
								<TableContainer component={Paper}>
									<Table>
										<TableHead>
											<TableRow>
												<TableCell>Quiz</TableCell>
												<TableCell>Score</TableCell>
												<TableCell>Last Update</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{data.result.map((row) => (
												<TableRow key={row.scoreID}>
													<TableCell> {row.quiz.name} </TableCell>
													<TableCell> {row.score} </TableCell>
													<TableCell>
														{' '}
														{new Date(row.updatedAt).toLocaleDateString('fr-FR')}{' '}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Box>
						</>
					)}
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

export default PopupInfoUser;
