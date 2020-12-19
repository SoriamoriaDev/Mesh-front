import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import ContactsHeader from './ContactsHeader';
import ContactsList from './ContactsList';
import reducer from './store';
import { getPlayers } from './store/contactsSlice';

function PlayersApp(props) {

	//console.log("PlayersApp")

	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	//console.log("routeParams", routeParams)

	useDeepCompareEffect(() => {
		//dispatch(getContacts(routeParams));
		//dispatch(getUserData());

		dispatch(getPlayers(routeParams));


	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<ContactsHeader pageLayout={pageLayout} />}
				content={<ContactsList />}
				//leftSidebarContent={<ContactsSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
			{/* <ContactDialog /> */}
		</>
	);
}

export default withReducer('playersApp', reducer)(PlayersApp);
