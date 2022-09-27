import QuizQuestionItem from './quiz-question-item';

const QuizQuestionList = ({ questions, updated, deleted }) => {
	const questionList = questions.map((question) => {
		return (
			<QuizQuestionItem key={question.questionID} question={question} updated={(e) => updated(e)} deleted={(e)=>deleted(e)} />
		);
	});
	return <>{questionList}</>;
};
export default QuizQuestionList;
