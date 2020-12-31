import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
//import { State } from 'velocity-animate';


export const sendGPSLocation = createAsyncThunk('GPSlocation/location/sendLocation', async (data) => {   // SIGNET
	//console.log("data in createAsyncThunk", data)
	return data;

});


const GPSlocationAdapter = createEntityAdapter({});

export const { selectEntities: selectGPSlocationEntities } = GPSlocationAdapter.getSelectors(
	state => state.GPSlocation.GPSlocation
);

const GPSlocationSlice = createSlice({
	name: 'GPSlocation',
	initialState: { location: {lat : 43.269909, lng : 5.395969}, loading: 'idle' },
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: {
		// Add reducers for additional action types here, and handle loading state as needed
		[sendGPSLocation.fulfilled]: (state, action) => {

			state.entities = action.payload

		  }

    }
});


export default GPSlocationSlice.reducer;
