import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdminQuizQuestionItem from './admin-quiz-question-item';

const AdminQuizQuestionList = ({ questions }) => {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>QuestionID</TableCell>
						<TableCell>Theme</TableCell>
						<TableCell>Libelle</TableCell>
						<TableCell>
							<SearchIcon />
						</TableCell>
					</TableRow>
				</TableHead>
                <TableBody>
                    {questions.map((question)=>{
                        return <AdminQuizQuestionItem question={question} />
                    })}
                </TableBody>
			</Table>
		</TableContainer>
	);
};

export default AdminQuizQuestionList;
