import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const AdminEditQuizQuestionLibelle = ({libelle, libelleQuiz, error}) => {
    const [libelleQ, setLibelle] = useState(libelle);
    const [errorMessageQuiz, setErrorMessageQuiz] = useState('');

    useEffect(() => {
		if (libelleQ.length <= 0) {
			setErrorMessageQuiz('the field is empty');
			error(true);
		}
		if (libelleQ.length > 0) {
			setErrorMessageQuiz('');
			libelleQuiz(libelleQ);
			error(false);
		}
	}, [libelleQ]);

    return (
		<>
			<TextField
			fullWidth 
				id="field1"
				label="Question name"
				margin="dense"
				variant="filled"
                value={libelleQ}
				helperText={errorMessageQuiz}
				error={errorMessageQuiz.length > 0}
				onChange={({ target }) => setLibelle(target.value)}
			/>
		</>
	);
}
export default AdminEditQuizQuestionLibelle