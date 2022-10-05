import { Alert, CircularProgress } from '@mui/material';
import { useUpdated } from '../../../../hooks/useRequest';

const RequestEditScore = ({ scoreID, userID, quizID, score }) => {
    console.log(quizID);
	if (scoreID && score && quizID && userID) {
		const url = import.meta.env.VITE_API_SCORE;
		const dt = {
			scoreID: scoreID,
			userID: userID,
			quizID: quizID,
			score: score,
		};
		const { data, isLoading, errors } = useUpdated(url,dt,scoreID);

        if (isLoading) {
            return <CircularProgress />;
        }
    
        if (errors) {
            console.error('-------------ERROR------------');
            console.error(errors);
            console.error('-------------ERROR------------');
            return (
                <Alert margin="dense" severity="error">
                    {errors}
                </Alert>
            );
        }
    
        if (data) {
            window.location.reload();
        }
    
        return <></>;
	}
};

export default RequestEditScore;
