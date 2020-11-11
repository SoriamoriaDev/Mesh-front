import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGames = createAsyncThunk('games/getGames', async () => {   // SIGNET
	const response = await axios.get(`${process.env.REACT_APP_API_URL}/event/all`); 
	const data = await response.data;

    console.log("Data back from back end", data)
	return data;
});

const gamesAdapter = createEntityAdapter({});

export const { selectEntities: selectGamesEntities, selectById: selectGameById } = gamesAdapter.getSelectors(
	state => state.gamesPage
);

const gamesSlice = createSlice({
	name: 'games',
	initialState: gamesAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getGames.fulfilled]: gamesAdapter.setAll
	}
});

export default gamesSlice.reducer;
