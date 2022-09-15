import { Alert, CircularProgress } from "@mui/material";
import { useRegister } from "../../../hooks/useRequest"

const RequestRegistration = ({registers}) => {
	console.log(registers);
    if (registers) {
        const { isLoading, errors } = useRegister(registers)
        if (isLoading) {
			return <CircularProgress />;
		}
        if (errors) {
			console.error('-------------ERROR------------');
			console.error(errors);
			console.error('-------------ERROR------------');
			return (
				<Alert margin="dense" severity="error">
					ERROR Identifier and Password was wrong
				</Alert>
			);
		}
    }
    return <></>
}

export default RequestRegistration