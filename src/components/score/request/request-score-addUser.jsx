import { Alert, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAdd } from "../../../hooks/useRequest"

const RequestScoreAddUser = ({dt}) => {
    const navigate = useNavigate();
    const url = import.meta.env.VITE_API_SCORE;
    const { data, isLoading, errors } = useAdd(url, dt)

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
        navigate('/quiz');
    }
}

export default RequestScoreAddUser