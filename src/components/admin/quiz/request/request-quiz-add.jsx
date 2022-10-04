import { Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAdd } from '../../../../hooks/useRequest';

const RequestQuizAdd = ({ dt }) => {
	const url = import.meta.env.VITE_API_QUIZ + 'addQuiz';
	const navigate = useNavigate();

	const { data, isLoading, errors } = useAdd(url, dt);

 
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
};

export default RequestQuizAdd;
