import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import moment from 'moment/moment';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './store/contactsSlice';
import { sendMessage } from './store/chatSlice';
import socketClient  from "socket.io-client"

const useStyles = makeStyles(theme => ({
	messageRow: {
		'&.contact': {
			'& .bubble': {
				backgroundColor: theme.palette.primary.darkGrey,
				color: theme.palette.getContrastText(theme.palette.background.paper),
				borderTopLeftRadius: 5,
				borderBottomLeftRadius: 5,
				borderTopRightRadius: 20,
				borderBottomRightRadius: 20,
				'& .time': {
					marginLeft: 12
				}
			},
			'&.first-of-group': {
				'& .bubble': {
					borderTopLeftRadius: 20
				}
			},
			'&.last-of-group': {
				'& .bubble': {
					borderBottomLeftRadius: 20
				}
			}
		},
		'&.me': {
			paddingLeft: 40,

			'& .avatar': {
				order: 2,
				margin: '0 0 0 16px'
			},
			'& .bubble': {
				marginLeft: 'auto',
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				borderTopLeftRadius: 20,
				borderBottomLeftRadius: 20,
				borderTopRightRadius: 5,
				borderBottomRightRadius: 5,
				'& .time': {
					justifyContent: 'flex-end',
					right: 0,
					marginRight: 12
				}
			},
			'&.first-of-group': {
				'& .bubble': {
					borderTopRightRadius: 20
				}
			},

			'&.last-of-group': {
				'& .bubble': {
					borderBottomRightRadius: 20
				}
			}
		},
		'&.contact + .me, &.me + .contact': {
			paddingTop: 20,
			marginTop: 20
		},
		'&.first-of-group': {
			'& .bubble': {
				borderTopLeftRadius: 20,
				paddingTop: 13
			}
		},
		'&.last-of-group': {
			'& .bubble': {
				borderBottomLeftRadius: 20,
				paddingBottom: 13,
				'& .time': {
					display: 'flex'
				}
			}
		}
	}
}));

//const server = "http://localhost:4020";
const server = process.env.REACT_APP_API_URL
const socket = socketClient (server);

function Chat(props) {

	const dispatch = useDispatch();

	const contacts = useSelector(selectContacts);
	const selectedContactId = useSelector(({ chatApp }) => chatApp.contacts.selectedContactId);
	const chatReceived = useSelector(({ chatApp }) => chatApp.chat);
	const user = useSelector(({ auth }) => auth.user);
	const [chat, setChat] = useState([])
	const [messageText, setMessageText] = useState('');
	
	const classes = useStyles(props);
	const chatRef = useRef(null);
	

	useEffect(() => {

		if (chatReceived) {

			setChat(chatReceived)

			scrollToBottom();
			
		}

	}, [chatReceived]);


	useEffect(() => {

		socket.on('from back', message => {
	
            setChat([...chat, message])
            scrollToBottom();
			
		});

	});

	function scrollToBottom() {
		chatRef.current.scrollTop = chatRef.current.scrollHeight;
	}

	// function shouldShowContactAvatar(item, i) {
	// 	return (
	// 		item.user_id === selectedContactId &&
	// 		((chat[i + 1] && chat[i + 1].user_id !== selectedContactId) || !chat[i + 1])
	// 	);
    // }
    
	function shouldShowContactAvatar(item, i) {
		return (
			item.user_id !== user._id 
		);
	}

	function isFirstMessageOfGroup(item, i) {
		return i === 0 || (chat[i - 1] && chat[i - 1].user_id !== item.user_id);
	}

	function isLastMessageOfGroup(item, i) {
		return i === chat.length - 1 || (chat[i + 1] && chat[i + 1].user_id !== item.user_id);
	}

	function onInputChange(ev) {
		setMessageText(ev.target.value);
	}

	function onMessageSubmit(ev) {

		ev.preventDefault();

		if (messageText === '') {
			return;
		}

		socket.emit('chatRoom_0001_toBack', {

			content: messageText,
			chatRoom_id: "0001",
			deleted: false,
            user_id: user._id
            
		});

        setMessageText('');
        scrollToBottom()

	}

	//console.log("chat : ", chat)
    //console.log("user : ", user)
    //console.log("contacts : ", contacts)
    

	return (
		<div className={clsx('flex flex-col relative', props.className)}>
			
			<FuseScrollbars ref={chatRef} className="flex flex-1 flex-col overflow-y-auto">
				{chat && chat.length > 0 ? (
					<div className="flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40">
						{chat.map((item, i) => {
							const contact =
								item.user_id === user._id ? user : contacts.find(_contact => _contact.id === item.user_id);
							return (
								<div
									//key={item.time}
									key={i}
									className={clsx(
										classes.messageRow,
										'flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative px-16 pb-4',
										{ me: item.user_id === user._id },
										{ contact: item.user_id !== user._id },
										{ 'first-of-group': isFirstMessageOfGroup(item, i) },
										{ 'last-of-group': isLastMessageOfGroup(item, i) },
										i + 1 === chat.length && 'pb-96'
									)}
								>
									{/* {shouldShowContactAvatar(item, i) && (
										<Avatar
											className="avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32"
											src={contact.avatar}
										/>
									)} */}

									{shouldShowContactAvatar(item, i) && (
										<Avatar
											className="avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32"
											src="/assets/images/avatars/avatar.png"
										/>
									)}

									{/* <Avatar
										className="avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32"
										//src={contact.avatar}
										src="/assets/images/avatars/avatar.png"
									/> */}

									<div className="bubble flex relative items-center justify-center p-12 max-w-full shadow-1">
										<div className="leading-tight whitespace-pre-wrap">{item.content}</div>
										<Typography
											className="time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-no-wrap"
											color="textSecondary"
										>
											{moment(item.createdAt).format('dddd DD/MM/YYYY HH:mm')}
										</Typography>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="flex flex-col flex-1">
						<div className="flex flex-col flex-1 items-center justify-center">
							<Icon className="text-128" color="disabled">
								chat
							</Icon>
						</div>
						<Typography className="px-16 pb-24 text-center" color="textSecondary">
							Start a conversation by typing your message below.
						</Typography>
					</div>
				)}
			</FuseScrollbars>


			{chat && (
				<form onSubmit={onMessageSubmit} className="absolute bottom-0 right-0 left-0 py-16 px-8">
					<Paper className="flex items-center relative rounded-24" elevation={3}>
						<TextField
							autoFocus={false}
							id="message-input"
							className="flex-1"
							InputProps={{
								disableUnderline: true,
								classes: {
									root: 'flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8',
									input: ''
								},
								placeholder: 'Type your message'
							}}
							InputLabelProps={{
								shrink: false,
								className: classes.bootstrapFormLabel
							}}
							onChange={onInputChange}
							value={messageText}
						/>
						<IconButton className="absolute ltr:right-0 rtl:left-0 top-0" type="submit">
							<Icon className="text-24" style={{ color: "#55e7b5" }} >
								send
							</Icon>
						</IconButton>
					</Paper>
				</form>
			)}


		</div>
	);
}

export default Chat;
