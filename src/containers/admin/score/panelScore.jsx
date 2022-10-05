import { Button } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import TableScore from './TableScore';

const PanelScore = ({ score: dt }) => {
	const [popupAdd, setPopupAdd] = useState(false);

	const countScore = dt.count;
	const score = dt.results;
	return (
		<>
			<h3>Number of Score: {countScore} </h3>
			<Button
				disabled={true}
				endIcon={<AddIcon />}
				variant="outlined"
				color="success"
				onClick={() => {
					setPopupAdd(true);
				}}
			>
				Add New Score
			</Button>

			{/* {popupAdd ? '' <PopupAddQuiz popup={(e)=>setPopupAdd(e)} /> : ''} */}

			<Box sx={{ p: 5 }}>
				<TableScore score={score} />
			</Box>
		</>
	);
};

export default PanelScore;
