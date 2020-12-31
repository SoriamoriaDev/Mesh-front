import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserData } from './userSlice';





export const getTeam = createAsyncThunk('teams/getTeam', async (params, { getState }) => {

	//console.log("teamId in slice", params)

	const response = await axios.get((`${process.env.REACT_APP_API_URL}/team/teaminfo/${params.teamId}`));

	const data = await response.data.data;

	//console.log("One Team - Data back from DB : ", data)

	return data;
});





export const getTeams = createAsyncThunk('teams/getTeams', async (routeParams, { getState }) => {
	
	routeParams = routeParams || getState().contactsApp.contacts.routeParams;

	//console.log("routeParams in slice", routeParams)

	const response = await axios.get((`${process.env.REACT_APP_API_URL}/team/all`));

	const data = await response.data.data;

	//console.log("Teams - Data back from DB : ", response.data)

	return { data, routeParams };
});


export const createNewTeam = createAsyncThunk('teams/createTeam', async (team, { dispatch, getState }) => {
	
	//routeParams = routeParams || getState().contactsApp.contacts.routeParams;
	//console.log("routeParams in slice", routeParams)

	const response = await axios.post((`${process.env.REACT_APP_API_URL}/team/createnew`), { team });

	const data = await response.data.data;
	dispatch(getTeams());

	//console.log("createTeam - Data back from DB : ", response.data)


	return data;
});

export const getTeamPlayers = createAsyncThunk('teams/getTeamPlayers', async (params, { getState }) => {

	//routeParams = routeParams || getState().contactsApp.contacts.routeParams;

	//console.log("routeParams in slice", routeParams)

	const response = await axios.get((`${process.env.REACT_APP_API_URL}/team//allteamplayers/${params.teamId}`));

	const data = await response.data.data;

	console.log("getTeamPlayers - Data back from DB : ", data)

	return data ;

});

export const askJoinTeam = createAsyncThunk('teams/askJoinTeam', async (info, { dispatch, getState }) => {
	
	//routeParams = routeParams || getState().contactsApp.contacts.routeParams;
	console.log("info in slice : ", info)

	let userID = info.userID

	info.teamId = info.teamID

	const response = await axios.post((`${process.env.REACT_APP_API_URL}/team/asktojoin/${info.teamID}`), { userID } );

	const data = await response.data.data;

	console.log("askJoinTeam - Data back from DB : ", response.data)

	dispatch(getTeamPlayers(info));
	dispatch(getTeam(info));

	return data;
});


export const addContact = createAsyncThunk('contactsApp/contacts/addContact',async (contact, { dispatch, getState }) => {
		
	const response = await axios.post('/api/contacts-app/add-contact', { contact });

	const data = await response.data;

	//dispatch(getContacts());

		return data;
}
);

export const getContacts = createAsyncThunk('contactsApp/contacts/getContacts', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().contactsApp.contacts.routeParams;
	const response = await axios.get('/api/contacts-app/contacts', {
		params: routeParams
	});
	const data = await response.data;

	return { data, routeParams };
});



export const updateContact = createAsyncThunk(
	'contactsApp/contacts/updateContact',
	async (contact, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/update-contact', { contact });
		const data = await response.data;

		//dispatch(getContacts());

		return data;
	}
);

export const removeContact = createAsyncThunk(
	'contactsApp/contacts/removeContact',
	async (contactId, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/remove-contact', { contactId });
		const data = await response.data;

		//dispatch(getContacts());

		return data;
	}
);

export const removeContacts = createAsyncThunk(
	'contactsApp/contacts/removeContacts',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/remove-contacts', { contactIds });
		const data = await response.data;

		//dispatch(getContacts());

		return data;
	}
);

export const toggleStarredContact = createAsyncThunk(
	'contactsApp/contacts/toggleStarredContact',
	async (contactId, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/toggle-starred-contact', { contactId });
		const data = await response.data;

		//dispatch(getUserData());

		//dispatch(getContacts());

		return data;
	}
);

export const toggleStarredContacts = createAsyncThunk(
	'contactsApp/contacts/toggleStarredContacts',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/toggle-starred-contacts', { contactIds });
		const data = await response.data;

		dispatch(getUserData());

		//dispatch(getContacts());

		return data;
	}
);

export const setContactsStarred = createAsyncThunk(
	'contactsApp/contacts/setContactsStarred',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/set-contacts-starred', { contactIds });
		const data = await response.data;

		dispatch(getUserData());

		//dispatch(getContacts());

		return data;
	}
);

export const setContactsUnstarred = createAsyncThunk(
	'contactsApp/contacts/setContactsUnstarred',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/set-contacts-unstarred', { contactIds });
		const data = await response.data;

		dispatch(getUserData());

		//dispatch(getContacts());

		return data;
	}
);

const teamsAdapter = createEntityAdapter({});

//export const { selectAll: selectContacts, selectById: selectContactsById } = contactsAdapter.getSelectors(
export const { selectEntities: selectTeamsEntities, selectById: selectTeamsById, selectOneTeam: selectTeamsOneTeam } = teamsAdapter.getSelectors(
	//state => state.contactsApp.contacts
	state => state.teams.teams
);


const teamsSlice = createSlice({
	name: 'teams',
	initialState: teamsAdapter.getInitialState({
		//players: [],
		searchText: '',
		routeParams: {},
		contactDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		setContactsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		//[updateContact.fulfilled]: teamsAdapter.upsertOne,
		//[addContact.fulfilled]: teamsAdapter.addOne,
		// [getContacts.fulfilled]: (state, action) => {
		// 	const { data, routeParams } = action.payload;
		// 	teamsAdapter.setAll(state, data);
		// 	state.routeParams = routeParams;
		// 	state.searchText = '';
		// },
		// [getPlayers.fulfilled]: (state, action) => {
		// 	state.entities = action.payload.data;
			
		// },
		[getTeams.fulfilled]: (state, action) => {
			state.entities = action.payload.data;
			
		},
		[getTeam.fulfilled]: (state, action) => {
			//console.log("action.payload.data : ", action.payload.data)
			//console.log("action.payload : ", action.payload)
			state.oneTeam = action.payload;
			
		},
		[getTeamPlayers.fulfilled]: (state, action) => {
			//console.log("action.payload.data : ", action.payload.data)
			//console.log("action.payload : ", action.payload)
			state.teamPlayers = action.payload;
			
		}
	}
});

// export const {
// 	setContactsSearchText,
// 	openNewContactDialog,
// 	closeNewContactDialog,
// 	openEditContactDialog,
// 	closeEditContactDialog
// } = teamsSlice.actions;

export default teamsSlice.reducer;
