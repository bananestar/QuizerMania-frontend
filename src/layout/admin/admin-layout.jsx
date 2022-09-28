import { Outlet } from 'react-router-dom';
import style from './admin-layout.module.scss';
import Footer from '../../containers/footer/footer';
import Header from '../../containers/header/header';
import AdminNavMenu from '../../containers/admin/nav-menu/nav-menu-admin';

const AdminLayout = () => (
	<div className={style.baseMain}>
		<Header />
		<AdminNavMenu />
		<main className={style.baseContent}>
			{/* ↓ Element de routing via React-router */}
			<Outlet />
		</main>
		<Footer />
	</div>
);

export default AdminLayout;
