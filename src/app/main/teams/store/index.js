import { combineReducers } from '@reduxjs/toolkit';
import teams from './teamsSlice';
import user from './userSlice';

const reducer = combineReducers({
	teams,
	user
});

export default reducer;
