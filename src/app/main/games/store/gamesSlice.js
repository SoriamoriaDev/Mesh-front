import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGames = createAsyncThunk('games/getGames', async () => {   // SIGNET
	const response = await axios.get(`${process.env.REACT_APP_API_URL}/event/all`); 
	const data = await response.data;

    //console.log("getGames : Data back from back end", data)
	return data;
});

export const createNewGame = createAsyncThunk('games/createGame', async (game, { dispatch, getState }) => {
	
	//routeParams = routeParams || getState().contactsApp.contacts.routeParams;
	//console.log("routeParams in slice", routeParams)

	const response = await axios.post((`${process.env.REACT_APP_API_URL}/event/create`), { game });

	const data = await response.data.data;
	dispatch(getGames());

	//console.log("createGame - Data back from DB : ", response.data)

	return data;
});

export const getGamePlayers = createAsyncThunk('games/gamePlayers', async (players, { dispatch, getState }) => {
	
	const response = await axios.post((`${process.env.REACT_APP_API_URL}/users/listofusers`), { players });

	const data = await response.data.data;
	//dispatch(getGames());

	//console.log("getGamePlayers - Data back from DB : ", response.data)

	return data;
});

export const clearGamePlayers = createAsyncThunk('games/clearGamePlayers', async () => {
	
	//const response = await axios.post((`${process.env.REACT_APP_API_URL}/users/listofusers`), { players });

	const data = []
	//dispatch(getGames());

	//console.log("getGamePlayers - Data back from DB : ", response.data)

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

		[getGames.fulfilled]: (state, action) => {

			state.entities = action.payload
        },
        [createNewGame.fulfilled]: (state, action) => {
        
            state.newGame = action.payload;
			
		},
        [getGamePlayers.fulfilled]: (state, action) => {
        
            state.gamePlayers = action.payload;
			
		},
        [clearGamePlayers.fulfilled]: (state, action) => {
        
            state.gamePlayers = action.payload;
			
		},
    }
});


export default gamesSlice.reducer;
