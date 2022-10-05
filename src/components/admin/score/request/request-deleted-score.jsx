import { Alert, CircularProgress } from '@mui/material';
import { useDeleted } from '../../../../hooks/useRequest';

const RequestDeletedScore = ({ scoreID }) => {
	if (scoreID) {
		const url = import.meta.env.VITE_API_SCORE;
		const { data, isLoading, errors } = useDeleted(url,scoreID);

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

export default RequestDeletedScore;
