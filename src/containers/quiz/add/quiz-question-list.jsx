import QuizQuestionItem from './quiz-question-item';

const QuizQuestionList = ({ questions, updated, deleted, control }) => {
	const questionList = questions.map((question) => {
		return (
			<QuizQuestionItem
				key={question.questionID}
				question={question}
				updated={(e) => updated(e)}
				deleted={(e) => deleted(e)}
				control={(e) => {
					control(e);
				}}
			/>
		);
	});
	return <>{questionList}</>;
};
export default QuizQuestionList;
