import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
//import { refreshUser } from '../../redux/auth/operations'
import { useAuth } from 'hooks';
//import { useDispatch } from 'react-redux';

export const AuthNav = () => {
	const { error } = useAuth();
	//const dispatch = useDispatch
	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div className={css.wrapper} >
			<p className={css.disactive}></p>
			<NavLink onClick={() => { error && refreshPage() }} className={css.link} to="/register">
				Register
			</NavLink>
			<NavLink onClick={() => { error && refreshPage() }} className={css.link} to="/login">
				Log In
			</NavLink>
		</div>
	);
};
