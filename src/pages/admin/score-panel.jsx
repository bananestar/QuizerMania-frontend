import { Alert, Box, LinearProgress } from "@mui/material";
import PanelScore from "../../containers/admin/score/panelScore";
import { useQuery } from "../../hooks/useRequest";
import NotFound from "../error/notfound";

const AdminScorePanel = () => {
    const url = import.meta.env.VITE_API_SCORE;

    const { data, isLoading, errors } = useQuery(url);

    if (errors) {
		console.error('-------------ERROR------------');
		console.error(errors);
		console.error('-------------ERROR------------');
	}
	
	return (
		<Box>
            <h1>Admin Score Panel</h1>
			{isLoading ? (
				<LinearProgress color="secondary" />
			) : errors ? (
				<Alert margin="dense" severity="error">
					{errors}
				</Alert>
			) : data ? (
				<PanelScore score={data} />
			) : (
				<NotFound/>
			)}
		</Box>
	);
}
export default AdminScorePanel