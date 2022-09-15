import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/base-layout';
import HomePage from './pages/home/home';
import './App.css';
import NotFound from './pages/error/notfound';
import LoginPage from './pages/user/login';
import { useJwtAdmin } from './hooks/useJwt';
import RegistrationPage from './pages/user/registration';

function App() {
	useJwtAdmin()
	return (
		<Routes>
			<Route path="/" element={<BaseLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
