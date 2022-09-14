import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/base-layout';
import HomePage from './pages/home/home';
import './App.css';
import NotFound from './pages/error/notfound';

function App() {
	return (
		<Routes>
			<Route path="/" element={<BaseLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
