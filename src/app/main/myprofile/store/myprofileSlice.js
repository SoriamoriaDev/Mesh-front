import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProfile = createAsyncThunk('myprofile/getProfile', async (userid) => {  
	const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/profile/${userid}`); 
	const data = await response.data;

	//console.log("Get profile : Data back from back end", data)
	
	return data;
});


export const updateMyProfile = createAsyncThunk('myprofile/updateProfile', async (profile, { dispatch, getState }) => {
		const response = await axios.put(`${process.env.REACT_APP_API_URL}/users/edit/${profile._id}`, profile);
		const data = await response.data;

		//console.log("Update profile : Data back from back end", data)

		dispatch(getProfile(profile._id));

		return data;
	}
);

const profileAdapter = createEntityAdapter({});

export const { selectEntities: selectProfile, selectById: selectGameById } = profileAdapter.getSelectors(
	state => state.myprofile.myprofile
);

const myprofileSlice = createSlice({
	name: 'profile',
	initialState: { profile: [], loading: 'idle' },
	reducers: {// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: {
		// Add reducers for additional action types here, and handle loading state as needed
		[getProfile.fulfilled]: (state, action) => {
			// Add user to the state array
			//state.entities.push(action.payload)
			state.entities = action.payload
			//state.games = action.payload
		  }
    }
});


export default myprofileSlice.reducer;
