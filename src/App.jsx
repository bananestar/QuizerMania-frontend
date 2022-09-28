import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import './App.css';
import NotFound from './pages/error/notfound';
import LoginPage from './pages/user/login';
import { useJwtUser } from './hooks/useJwtUser';
import RegistrationPage from './pages/user/registration';
import AccountPage from './pages/user/account';
import QuizPage from './pages/quiz/quiz';
import QuestionnairePage from './pages/quiz/questionnaire';
import ScorePage from './pages/score/score';
import ScoreByQuiz from './pages/score/scoreByQuiz';
import QuizAddPage from './pages/quiz/quizAdd';
import AdminPage from './pages/admin/admin';
import AdminLayout from './layout/admin/admin-layout';
import BaseLayout from './layout/base/base-layout';
import AdminUserPanel from './pages/admin/user-panel';
import AdminScorePanel from './pages/admin/score-panel';
import AdminQuizPanel from './pages/admin/quiz-panel';

function App() {
	useJwtUser();
	return (
		<Routes>
			<Route path="/">
				<Route path="" element={<BaseLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/account" element={<AccountPage />} />
					<Route path="/registration" element={<RegistrationPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/quiz" element={<QuizPage />} />
					<Route path="/quiz/add" element={<QuizAddPage />} />
					<Route path="/quiz/:quizID" element={<QuestionnairePage />} />
					<Route path="/score" element={<ScorePage />} />
					<Route path="/score/:quizID" element={<ScoreByQuiz />} />
					<Route path="/*" element={<NotFound />} />
				</Route>
				<Route path="/admin" element={<AdminLayout />}>
					<Route index element={<AdminPage />} />
					<Route path="user-panel" element={<AdminUserPanel />} />
					<Route path="quiz-panel" element={<AdminQuizPanel />} />
					<Route path="score-panel" element={<AdminScorePanel />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
