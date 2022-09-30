import { Alert, Box, LinearProgress } from "@mui/material";
import PanelQuiz from "../../containers/admin/quiz/panelQuiz";
import { useQuery } from "../../hooks/useRequest";
import NotFound from "../error/notfound";

const AdminQuizPanel = () => {
    const url = import.meta.env.VITE_API_QUIZ;

    const { data, isLoading, errors } = useQuery(url);

    if (errors) {
		console.error('-------------ERROR------------');
		console.error(errors);
		console.error('-------------ERROR------------');
	}
	
	return (
		<Box>
            <h1>Admin Quiz Panel</h1>
			{isLoading ? (
				<LinearProgress color="secondary" />
			) : errors ? (
				<Alert margin="dense" severity="error">
					{errors}
				</Alert>
			) : data ? (
				<PanelQuiz quiz={data} />
			) : (
				<NotFound/>
			)}
		</Box>
	);
}
export default AdminQuizPanel