import { IconButton, TableCell, TableRow } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminEditQuizReponseLibelle from './admin-edit-quiz-reponse-libelle';

const AdminEditQuizQuestionReponseItem = ({ reponse, update, error }) => {
	// console.log(reponse);

	const [isValid, setIsValid] = useState(reponse.isValid)
	const [libelle, setLibelle] = useState(reponse.libelle)
	const [data, setData] = useState()

	useEffect(()=>{
		const dt = {
			reponseID: reponse.reponseID,
			questionID: reponse.questionID,
			libelle: libelle,
			isValid: isValid
		}
		setData(dt)
	},[isValid,libelle])

	useEffect(()=>{
		// console.log(data);
		update(data)
	},[data])

	return (
		<TableRow>
			<TableCell width="10%"> {reponse.reponseID} </TableCell>
			<TableCell width="10%">
				<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setIsValid(!isValid)}
					>
						{isValid ? <CheckIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />}
					</IconButton>
			</TableCell>
			<TableCell> <AdminEditQuizReponseLibelle libelle={reponse.libelle} libelleReponse={(e)=>{setLibelle(e)}} error={(e)=>error(e)} /> </TableCell>
		</TableRow>
	);
};

export default AdminEditQuizQuestionReponseItem;