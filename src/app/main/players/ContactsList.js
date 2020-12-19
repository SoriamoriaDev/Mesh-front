import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import ContactsTable from './ContactsTable';
import { removeContact, toggleStarredContact, selectPlayersEntities  } from './store/contactsSlice';
import _ from '@lodash';
import dayjs from 'dayjs'
import ProfileCard from '../myprofile/ProfileCard';
import Dialog from '@material-ui/core/Dialog';


function ContactsList(props) {

	const dispatch = useDispatch();
	let contacts = []
	contacts = useSelector(selectPlayersEntities);

	//const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
	//const user = useSelector(({ contactsApp }) => contactsApp.user);
	
	const searchText = ""
	const user = ""
	const [currentUser, setCurrentUser] = useState("")

	const [filteredData, setFilteredData] = useState([]);

	const [openDialog, setOpenDialog] = useState(false);

	//console.log("contacts[0] : ", contacts[0])





	const columns = React.useMemo(
		() => [
			{
				Header: ({ selectedFlatRows }) => {
					const selectedRowIds = selectedFlatRows.map(row => row.original.id);

					return (
						selectedFlatRows.length > 0 && <ContactsMultiSelectMenu selectedContactIds={selectedRowIds} />
					);
				},
				accessor: 'avatar',
				Cell: ({ row }) => {
					//return <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />;
					return <Avatar className="mx-8" alt={row.original.name} src={row.original.data.photoURL} />;
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: 'First Name',
				accessor: 'f_name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Last Name',
				accessor: 'l_name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Gender',
				accessor: 'gender',
				sortable: true
			},
			{
				Header: 'City',
				accessor: 'current_town',
				sortable: true
			},
			{
				Header: 'Country',
				accessor: 'country',
				sortable: true
			},
			{
				Header: 'Age',
				accessor: 'age',
				sortable: true
			},
			{
				id: 'action',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(toggleStarredContact(row.original.id));
							}}
						>
							{user.starred && user.starred.includes(row.original.id) ? (
								<Icon>star</Icon>
							) : (
								<Icon>star_border</Icon>
							)}
						</IconButton>
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeContact(row.original.id));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {

		function getFilteredArray(entities, _searchText) {

			//console.log("Entities : ", entities)

			if (_searchText.length === 0) {
				return contacts;
			}
			return FuseUtils.filterArrayByString(contacts, _searchText);
		}

		if (contacts) {

			//console.log("getFilteredArray(contacts, searchText)", getFilteredArray(contacts, searchText))

			setFilteredData(getFilteredArray(contacts, searchText));
		}
	}, [contacts, searchText]);

	function handleOpenDialog(id) {
		setCurrentUser(contacts[id])
		setOpenDialog(true);
	}

	function handleCloseDialog() {
		setOpenDialog(false);
	}


	// Prevent error when contacts data is not loaded yet
	if (_.isEmpty(contacts)) {   
		//console.log("Contacts is empty")
		return null;
	}

	if (!filteredData) {
		//console.log("No filteredData")
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no players !
				</Typography>
			</div>
		);
	}

	let contactsModified = ""

	if(contacts.length > 0){

		//console.log("contacts : ", contacts)

		contactsModified = contacts.map(obj=> ({ ...obj, age: dayjs().diff(obj.dob, 'years') }))

	}

	//console.log("contacts modified", contactsModified)


	return (
		<>
			<FuseAnimate animation="transition.slideUpIn" delay={300}>

				<ContactsTable
					columns={columns}
					data={contactsModified}
					onRowClick={(ev, row) => {
						if (row) {
							//dispatch(openEditContactDialog(row.original));
							handleOpenDialog(row.id)
						}
					}}
				/>

			</FuseAnimate>


			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
			>
				<ProfileCard margin={0} currentUser={currentUser} />


			</Dialog>


		</>
		
	);
}

export default ContactsList;
