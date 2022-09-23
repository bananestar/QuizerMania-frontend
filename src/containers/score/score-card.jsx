import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ScoreCard = ({ quiz }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea component={Link} to={'/score/'+ quiz.quizID}>
				<CardMedia
                sx={{padding: 1}}
					component="img"
					image="https://firebasestorage.googleapis.com/v0/b/quizermania-f7be1.appspot.com/o/score.png?alt=media&token=0d8bf460-925b-4f0c-9e0d-c5880b4578a5"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{quiz.name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
export default ScoreCard;
