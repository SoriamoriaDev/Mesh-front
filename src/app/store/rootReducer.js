import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import GPSlocation from 'app/fuse-layouts/layout1/components/store';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		i18n,
		GPSlocation,    // SIGNET IMPORTANT
		...asyncReducers
	});

export default createReducer;
