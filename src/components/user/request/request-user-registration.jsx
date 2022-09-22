import { Alert, CircularProgress } from "@mui/material";
import { useRegister } from "../../../hooks/useRequest"

const RequestUserRegistration = ({registers}) => {
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
					{errors}
				</Alert>
			);
		}
    }
    return <></>
}

export default RequestUserRegistration