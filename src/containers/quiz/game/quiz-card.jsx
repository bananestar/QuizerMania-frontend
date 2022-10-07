import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import { useState } from 'react';

const QuizCard = ({ quiz }) => {
	return (
		<Card>
			<CardMedia component="img" alt={quiz.name} height="200" image={quiz.img} />
			<CardContent>
				<Typography sx={{ fontSize: 18 }} variant="h5" component="div" gutterBottom>
					{quiz.name}
				</Typography>
				<Button component={Link} to={'/score/' + quiz.quizID}>
					<ScoreboardIcon sx={{ color: '#cc0000' }} />
					Score
				</Button>
				<Button component={Link} to={'/quiz/' + quiz.quizID}>
					<HelpCenterIcon sx={{ color: '#FFA500' }} />
					Questionnaire
				</Button>
			</CardContent>
		</Card>
	);
};

export default QuizCard;
