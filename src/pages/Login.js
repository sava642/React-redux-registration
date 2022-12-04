import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Error } from "../components/Error/Error";
import css from './Login.module.css';


export default function Login() {

	const { error } = useAuth();

	return (
		<div className={css.wrapper}>
			<Helmet>
				<title>Login</title>
			</Helmet>
			{!error ?
				<LoginForm /> :
				<Error />}

		</div>
	);
}
