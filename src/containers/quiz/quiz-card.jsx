import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const QuizCard = ({ quiz }) => {
	return (
		<Card
			component={Link}
			to={"/quiz/"+quiz.quizID}
		>
			<CardMedia
				component="img"
				alt="quiz img"
				height="200"
				image="https://firebasestorage.googleapis.com/v0/b/quizermania-f7be1.appspot.com/o/quiz-dans-style-bande-dessinee-pop-art_175838-505.jpg?alt=media&token=5ccc9eb8-5e81-429f-9556-f78daefc04fc"
			/>
			<CardContent>
				<Typography sx={{ fontSize: 18 }} variant="h5" component="div" gutterBottom>
					{quiz.name}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default QuizCard;
