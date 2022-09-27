import { Button, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import RequestScoreAdd from '../../../components/score/request/request-score-add';
import { useRecoilState } from 'recoil';
import { userIdAtom } from '../../../atoms/jwtAtom';

const QuizFinalScreen = ({ quiz, score }) => {
	console.log(quiz);
    const [send, setSend] = useState(false)
    const [data, setData] = useState()
    const [userId, setUserId] = useRecoilState(userIdAtom);

    const handleClickSave = () => {
        const dt = {
            userID : userId,
            quizID : quiz.quizID,
            score : score
        }
        setData(dt)
        setSend(true)
    }

	return (
		<>
			{' '}
			<Typography variant="h4"> {quiz.name} </Typography>
			<Typography mt={5} variant="h6">
				{' '}
				Votre score est de {score} / {quiz.questions.length}{' '}
			</Typography>
            <br />
			<Button variant="contained" color='success' onClick={handleClickSave}> <SaveIcon/> &nbsp; Sauvegarder votre score</Button>
            <br />
            {send ? <RequestScoreAdd dt={data} /> : ''}
		</>
	);
};
export default QuizFinalScreen;
