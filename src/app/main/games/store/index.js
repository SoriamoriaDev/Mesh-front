import { combineReducers } from '@reduxjs/toolkit';
import games from './gamesSlice';

const reducer = combineReducers({
	games
});

export default reducer;
