import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getContacts = createAsyncThunk('chatApp/contacts/getContacts', async params => {
    
    const response = await axios.get((`${process.env.REACT_APP_API_URL}/users`));

	const data = await response.data;

	return data;
});


const contactsAdapter = createEntityAdapter({});

export const { selectEntities: selectContactsEntities, selectAll: selectContacts, selectById: selectContactById } = contactsAdapter.getSelectors(
	state => state.chatApp.contacts
);

const contactsSlice = createSlice({
	name: 'chatApp/contacts',
	initialState: contactsAdapter.getInitialState({
		selectedContactId: null
	}),
	reducers: {
		setSelectedContactId: (state, action) => {
			state.selectedContactId = action.payload;
		},
		removeSelectedContactId: (state, action) => (state, action) => {
			state.selectedContactId = null;
		}
	},
	extraReducers: {
        //[getContacts.fulfilled]: contactsAdapter.setAll,
        [getContacts.fulfilled]: (state, action) => {
            state.entities = action.payload.data;
            
        }
    },
    
});

export const { setSelectedContactId, removeSelectedContactId } = contactsSlice.actions;

export default contactsSlice.reducer;
