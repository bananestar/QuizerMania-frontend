import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { red } from '@mui/material/colors';

const NotFound = () => {
	return (
		<>
			<div>
				<h1>404  <ReportProblemIcon sx={{ color: red[500] }} /> </h1>
			</div>
			<h2>Page not found</h2>
			<p>
				The page you are looking for might have been removed had its name changed or is temporarily
				unavailable.
			</p>
		</>
	);
};

export default NotFound;
