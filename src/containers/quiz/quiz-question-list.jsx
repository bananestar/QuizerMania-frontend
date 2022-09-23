import QuizQuestionItem from './quiz-question-item';

const QuizQuestionList = ({ questions }) => {
	const questionList = questions.map((question) => {
		return <QuizQuestionItem key={question.questionID} question={question} updated={(e)=>{console.log(e)}} />;
	});
	return <>{questionList}</>;
};
export default QuizQuestionList;
