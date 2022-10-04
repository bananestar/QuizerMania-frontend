import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const AdminEditQuizReponseLibelle = ({libelle, libelleReponse, error}) => {
    const [libelleR, setLibelle] = useState(libelle);
    const [errorMessageQuiz, setErrorMessageQuiz] = useState('');

    useEffect(() => {
		if (libelleR.length <= 0) {
			setErrorMessageQuiz('the field is empty');
			error(true);
		}
		if (libelleR.length > 0) {
			setErrorMessageQuiz('');
			libelleReponse(libelleR);
			error(false);
		}
	}, [libelleR]);

    return (
		<>
			<TextField
			fullWidth 
				id="field1"
				label="Reponse name"
				margin="dense"
				variant="filled"
                value={libelleR}
				helperText={errorMessageQuiz}
				error={errorMessageQuiz.length > 0}
				onChange={({ target }) => setLibelle(target.value)}
			/>
		</>
	);
}
export default AdminEditQuizReponseLibelle