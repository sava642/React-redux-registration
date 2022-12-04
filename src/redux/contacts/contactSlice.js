import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		contacts: [],
		isLoading: false,
		error: null,
		filter: '',
	},
	reducers: {
		filterContacts(state, action) {
			state.filter = action.payload;
		},
	},
	// Добавляем обработку внешних экшенов
	extraReducers: {

		[fetchContacts.pending](state) {
			state.isLoading = true;
		},
		[fetchContacts.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.contacts = action.payload;
		},
		[fetchContacts.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
		[addContact.pending](state) {
			state.isLoading = true;
		},
		[addContact.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.contacts.push(action.payload);
		},
		[addContact.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
		[deleteContact.pending](state) {
			state.isLoading = true;
		},
		[deleteContact.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
			state.contacts.splice(index, 1);
		},
		[deleteContact.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// // Генератори экшенов

// export const { addContact, deleteContacts, filterContacts } = contactsSlice.actions;
export const { filterContacts } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;