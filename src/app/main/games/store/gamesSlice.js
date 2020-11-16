import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGames = createAsyncThunk('games/getGames', async () => {   // SIGNET
	const response = await axios.get(`${process.env.REACT_APP_API_URL}/event/all`); 
	const data = await response.data;

    console.log("getGames : Data back from back end", data)
	return data;
});

const gamesAdapter = createEntityAdapter({});

export const { selectEntities: selectGamesEntities, selectById: selectGameById } = gamesAdapter.getSelectors(
	state => state.games.games
);

const gamesSlice = createSlice({
	name: 'game',
	initialState: { games: [], loading: 'idle' },
	reducers: {// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: {
		// Add reducers for additional action types here, and handle loading state as needed
		[getGames.fulfilled]: (state, action) => {
			// Add user to the state array
			//state.entities.push(action.payload)
			state.entities = action.payload
			//state.games = action.payload
		  }
    }
});


export default gamesSlice.reducer;
