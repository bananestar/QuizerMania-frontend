import { useEffect, useState } from 'react';
import RequestQuizGetAllQuestionQuiz from './request/request-quiz-getAllQuestionQuiz';

const PopupInfoQuiz = ({quizID, popup}) => {
	const [data, setData] = useState();

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<>
			<RequestQuizGetAllQuestionQuiz
				quizID={quizID}
				dt={(e) => {
					setData(e);
				}}
			/>
			{data ? '' : ''}
		</>
	);
};

export default PopupInfoQuiz;
