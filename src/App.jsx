import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/base-layout';
import HomePage from './pages/home/home';
import './App.css';
import NotFound from './pages/error/notfound';
import LoginPage from './pages/user/login';
import { useJwtUser } from './hooks/useJwtUser';
import RegistrationPage from './pages/user/registration';
import AccountPage from './pages/user/account';
import QuizPage from './pages/quiz/quiz';
import QuestionnairePage from './pages/quiz/questionnaire';

function App() {
	useJwtUser();
	return (
		<Routes>
			<Route path="/" element={<BaseLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/account" element={<AccountPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/quiz" element={<QuizPage />} />
				<Route path="/quiz/:quizID" element={<QuestionnairePage />} />
				<Route path="/*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
