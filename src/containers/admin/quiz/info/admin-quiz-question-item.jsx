import { IconButton, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import RequestQuizGetTheme from '../../../../components/admin/quiz/request/request-quiz-getTheme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AdminQuizQuestionReponseList from './admin-quiz-question-reponse-list';

const AdminQuizQuestionItem = ({ question }) => {
	const [popupQuestion, setPopupQuestion] = useState(false);
	return (
		<>
			<TableRow>
				<TableCell>{question.questionID}</TableCell>
				<TableCell>
					<RequestQuizGetTheme themeID={question.themeID} />
				</TableCell>
				<TableCell>{question.libelle}</TableCell>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setPopupQuestion(!popupQuestion)}
					>
						{popupQuestion ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
			</TableRow>
			{popupQuestion ? <AdminQuizQuestionReponseList reponses={question.reponses} /> : ''}
		</>
	);
};

export default AdminQuizQuestionItem;
