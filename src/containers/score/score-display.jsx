import { Box, Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ScoreCard from './score-card';
import { useState } from 'react';

const DisplayScore = ({ score }) => {
	const [allScore, setAllScore] = useState(score);
	const [backupScore, setBackupScore] = useState(score);

	const handleSearch = (value) => {
		if (value.length <= 0) {
			setAllScore(backupScore);
		} else {
			const newQuiz = allScore.filter((score) => {
				switch (true) {
					case score.name.toLowerCase().startsWith(value.toLowerCase()):
						return score;
				}
			});
			setAllScore(newQuiz);
		}
	};

	return (
		<Box sx={{ marginLeft: 30, flexGrow: 1 }}>
			<TextField
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				label="Search"
				variant="outlined"
				onChange={({ target }) => handleSearch(target.value)}
			/>
			<br />
			<br />
			<Grid container>
				{allScore.map((e) => {
					return (
						<>
							<Grid
								item
								sx={{
									m: 1,
									width: 275,
									boxShadow: 6,
									':hover': {
										boxShadow: 20,
									},
								}}
							>
								<ScoreCard quiz={e} />
							</Grid>
						</>
					);
				})}
			</Grid>
		</Box>
	);
};

export default DisplayScore;
