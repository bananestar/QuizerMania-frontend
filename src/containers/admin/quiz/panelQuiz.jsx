import { Button } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import TableQuiz from './TableQuiz';


const PanelQuiz = ({ quiz: qz }) => {
	const [popupAdd, setPopupAdd] = useState(false);

	const countQuiz = qz.count;
	const quiz = qz.results;
	// console.log(quiz);
	return (
		<>
			<h3>Number of Quiz: {countQuiz} </h3>
			<Button
				endIcon={<AddIcon />}
				variant="outlined"
				color="success"
				onClick={() => {
					setPopupAdd(true);
				}}
			>
				Add New Quiz
			</Button>

            {popupAdd ? '' : ''}

            <Box sx={{ p: 5 }}>
				<TableQuiz quiz={quiz}/>
			</Box>
		</>
	);
};

export default PanelQuiz;
