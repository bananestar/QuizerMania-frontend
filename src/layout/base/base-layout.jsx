import { Outlet } from 'react-router-dom';
import style from './layout.module.scss';
import Footer from '../../containers/footer/footer';
import Header from '../../containers/header/header';
import NavMenu from '../../containers/nav-menu/nav-menu';

const BaseLayout = () => (
	<div className={style.baseMain}>
		<Header />
		<NavMenu />
		<main className={style.baseContent}>
			{/* ↓ Element de routing via React-router */}
			<Outlet />
		</main>
		<Footer />
	</div>
);

export default BaseLayout;
