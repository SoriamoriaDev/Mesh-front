import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setSelectedContactId } from './contactsSlice';
import { closeMobileChatsSidebar } from './sidebarsSlice';
import { updateUserChatList } from './userSlice';

export const getMessages = createAsyncThunk('chatApp/chat/getMessages',async (params, { dispatch, getState }) => {
		
	//const { id: userId } = getState().chatApp.user;

	//const response = await axios.get(`${process.env.REACT_APP_API_URL}/team/teaminfo/${params.chatRoom_id}`, { params: {contactId,userId} });
	//const response = await axios.get(`${process.env.REACT_APP_API_URL}/team/teaminfo/${params.chatRoom_id}` );
	const response = await axios.get(`${process.env.REACT_APP_API_URL}/chat/messages/0001` );

	//console.log("response in getMessages : ", response.data)

	//dispatch(setSelectedContactId(contactId));
	//dispatch(updateUserChatList(userChatList));

	return response.data;

});

export const getChat = createAsyncThunk('chatApp/chat/getChat',async ({ contactId, isMobile }, { dispatch, getState }) => {
		
	const { id: userId } = getState().chatApp.user;

	const response = await axios.get('/api/chat/get-chat', {
		params: {
			contactId,
			userId
		}
	});
	const { chat, userChatList } = await response.data;

	dispatch(setSelectedContactId(contactId));
	dispatch(updateUserChatList(userChatList));

	if (isMobile) {
		dispatch(closeMobileChatsSidebar());
	}

	return chat;

});

export const sendMessage = createAsyncThunk('chatApp/chat/sendMessage', async ({ messageText, chatId, contactId }, { dispatch, getState }) => {
		
		const response = await axios.post('/api/chat/send-message', { chatId, messageText, contactId });

		const { message, userChatList } = await response.data;

		dispatch(updateUserChatList(userChatList));

		return message;
	}
);

const chatSlice = createSlice({
	name: 'chatApp/chat',
	initialState: null,
	//initialState: [],
	reducers: {
		removeChat: (state, action) => action.payload
	},
	extraReducers: {
		[getChat.fulfilled]: (state, action) => action.payload,
		[sendMessage.fulfilled]: (state, action) => {
			state.dialog = [...state.dialog, action.payload];
		},
		// [getMessages.fulfilled]: (state, action) => {

		// 	console.log("state :", state)
		// 	console.log("action :", action)
			
		// 	state.messages = action.payload;
			
		// },
		[getMessages.fulfilled]: (state, action) => action.payload
	}
});

export default chatSlice.reducer;