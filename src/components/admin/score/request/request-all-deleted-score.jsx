import { Alert, CircularProgress } from '@mui/material';
import { useDeleted } from '../../../../hooks/useRequest';

const RequestAllDeletedScore = ({ quizID }) => {
	if (quizID) {
		const url = import.meta.env.VITE_API_SCORE+'byQuiz/';
		const { data, isLoading, errors } = useDeleted(url,quizID);

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
    
        window.location.reload();
    
        return <></>;
	}
};

export default RequestAllDeletedScore;
