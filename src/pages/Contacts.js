import { ContactForm } from '../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import css from './Contacts.module.css';

export default function Contacts() {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<div style={{ marginTop: "30px", color: "white" }} >
				<ContactForm />
			</div>
			<div className={css.wrapper}>
				<h2>Added Contacts</h2>
				<Filter />
				<ContactList />
			</div>

		</>
	);
}




