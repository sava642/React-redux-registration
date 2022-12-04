import { List, ListItem, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors'
import { deleteContact } from '../../redux/contacts/operations';


export const ContactList = () => {

	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	const getVisiblContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase()))
	return (
		<List>
			{getVisiblContacts.map((contact, index) => (
				<ListItem key={contact.id}>
					{index + 1}. {contact.name} : {contact.number}
					{
						<Button
							type="button"
							onClick={() => dispatch(deleteContact(contact.id))}
						>
							x
						</Button>
					}
				</ListItem>
			))}
		</List>
	)


};