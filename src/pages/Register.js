import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';
import { Error } from "../components/Error/Error";
import css from './Register.module.css';

export default function Register() {

	const { error } = useAuth();

	return (
		<div className={css.wrapper}>
			<Helmet>
				<title>Registration</title>
			</Helmet>
			{!error ?
				<RegisterForm /> :
				<Error />}
		</div>
	);
}
