import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chat from './Chat';
import ChatsSidebar from './ChatsSidebar';
import ContactSidebar from './ContactSidebar';
import StatusIcon from './StatusIcon';
import reducer from './store';
import { getUserData } from './store/userSlice';
import { selectContactById, getContacts } from './store/contactsSlice';
import {
	closeContactSidebar,
	openContactSidebar,
	openMobileChatsSidebar,
	closeUserSidebar,
	closeMobileChatsSidebar
} from './store/sidebarsSlice';

import UserSidebar from './UserSidebar';
import { getMessages } from './store/chatSlice';
import ChatHeader from './ChatHeader';
import FusePageSimple from '@fuse/core/FusePageSimple';


const drawerWidth = 400;
const headerHeight = 200;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: '100%',
		position: 'relative',
		flex: '1 1 auto',
		height: 'auto',
		backgroundColor: theme.palette.background.default
	},
	topBg: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: headerHeight,
		backgroundImage: 'url("../../assets/images/backgrounds/header-bg.png")',
		backgroundColor: theme.palette.primary.dark,
		backgroundSize: 'cover',
		pointerEvents: 'none'
	},
	contentCardWrapper: {
		position: 'relative',
		padding: 24,
		maxWidth: 1400,
		display: 'flex',
		flexDirection: 'column',
		flex: '1 0 auto',
		width: '100%',
		minWidth: '0',
		maxHeight: '100%',
		margin: '0 auto',
		[theme.breakpoints.down('sm')]: {
			padding: 16
		},
		[theme.breakpoints.down('xs')]: {
			padding: 12
		}
	},
	contentCard: {
		display: 'flex',
		position: 'relative',
		flex: '1 1 100%',
		flexDirection: 'row',
		//backgroundImage: 'url("/assets/images/patterns/mesh300.png")', // has to be 300px X 300px
		//backgroundPosition: 'center',
		//backgroundRepeat: 'repeat-y',
		backgroundColor: theme.palette.background.paper,
		//backgroundSize: "cover",
		boxShadow: theme.shadows[1],
		borderRadius: 8,
		//minHeight: 0,
		maxHeight: '100%',
		//overflow: 'hidden'
      	width: 350,
      	//height: this.state.contentSize.height,
	},
	drawerPaper: {
		width: drawerWidth,
		maxWidth: '100%',
		overflow: 'hidden',
		height: '100%',
		[theme.breakpoints.up('md')]: {
			position: 'relative'
		}
	},
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 100%',
		zIndex: 10,
		background: `linear-gradient(to bottom, ${fade(theme.palette.background.paper, 0.8)} 0,${fade(
			theme.palette.background.paper,
			0.6
		)} 20%,${fade(theme.palette.background.paper, 0.8)})`
	},
	content: {
		display: 'flex',
		flex: '1 1 100%',
		minHeight: 0
	}
}));



function ChatApp(props) {

	const dispatch = useDispatch();
	const chat = useSelector(({ chatApp }) => chatApp.chat);
	const mobileChatsSidebarOpen = useSelector(({ chatApp }) => chatApp.sidebars.mobileChatsSidebarOpen);
	const userSidebarOpen = useSelector(({ chatApp }) => chatApp.sidebars.userSidebarOpen);
	const contactSidebarOpen = useSelector(({ chatApp }) => chatApp.sidebars.contactSidebarOpen);
	const selectedContact = useSelector(state => selectContactById(state, state.chatApp.contacts.selectedContactId));

    const pageLayout = useRef(null);
	const classes = useStyles(props);



	useEffect(() => {

		dispatch(getMessages());
		dispatch(getContacts());

	}, [dispatch]);

	return (

        <FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
                header={<ChatHeader pageLayout={pageLayout} />}
                
                content={

                    <div className={clsx(classes.root)}>

                        <div  className={clsx(classes.contentCardWrapper, 'container')} style={{margin: 0, maxWidth: 600}}>
                            
                            <div id="ici" className={classes.contentCard}>

                                <main className={clsx(classes.contentWrapper, 'z-10')}>
                                    
                                        <>
                                            <div className={classes.content}>
                                                <Chat className="flex flex-1 z-10" />
                                            </div>
                                        </>
                            
                                </main>

                            </div>

                        </div>

                    </div>

                }
                





				sidebarInner
				ref={pageLayout}
				innerScroll
			/>

		
	);
}

export default withReducer('chatApp', reducer)(ChatApp);
