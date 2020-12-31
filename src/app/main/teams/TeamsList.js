import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import TeamsTable from './TeamsTable';
import { toggleStarredContact, selectTeamsEntities  } from './store/teamsSlice';
import _ from '@lodash';
import dayjs from 'dayjs'
import TeamCard from './TeamCard';
import Dialog from '@material-ui/core/Dialog';
import { withRouter } from 'react-router-dom';


function TeamsList(props) {

	const dispatch = useDispatch();
	let teams = []
	teams = useSelector(selectTeamsEntities);

	//const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
	//const user = useSelector(({ contactsApp }) => contactsApp.user);
	
	const searchText = ""
	const user = ""

	const [currentTeam, setCurrentUser] = useState("")

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
					//return <Avatar className="mx-8" alt={row.original.name} src={row.original.logo} />;
					return <img style={{height:50}} alt={row.original.name} src={row.original.logo} />;
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: 'Name',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'City',
				accessor: 'city',
				sortable: true
			},
			{
				Header: 'Country',
				accessor: 'country',
				sortable: true
			},
			{
				Header: 'Founded',
				accessor: 'foundation_date',
				sortable: true
			},
			{
				Header: '# Members',
				accessor: '',
				sortable: true
			},
			{
				Header: 'Open',
				accessor: 'isOpen',
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
								//ev.stopPropagation();
								//dispatch(toggleStarredContact(row.original.id));
								handleClick(row.original._id);
								//console.log("row : ", row)
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
								//dispatch(removeContact(row.original.id));
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
				return teams;
			}
			return FuseUtils.filterArrayByString(teams, _searchText);
		}

		if (teams) {

			//console.log("getFilteredArray(contacts, searchText)", getFilteredArray(contacts, searchText))

			setFilteredData(getFilteredArray(teams, searchText));
		}
	}, [teams, searchText]);

	function handleOpenDialog(id) {
		setCurrentUser(teams[id])
		setOpenDialog(true);
	}

	function handleCloseDialog() {
		setOpenDialog(false);
	}


	//console.log("props in TeamList: ", props)
	//console.log("props.history in TeamList : ", props.props.history)


	function handleClick(id) {
		//props.history.push(`/apps/e-commerce/products/${item.id}/${item.handle}`);
		//console.log("push in history : " , id)
		props.props.history.push(`/teams/team/${id}`);
	}


	// Prevent error when contacts data is not loaded yet
	if (_.isEmpty(teams)) {   
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
					There are no teams !
				</Typography>
			</div>
		);
	}

	let teamsModified = ""

	if(teams.length > 0){

		//console.log("contacts : ", contacts)

		teamsModified = teams.map(obj=> ({ ...obj, foundation_date: dayjs(obj.foundation_date).format("DD.MM.YYYY") }))

	}

	//console.log("teams modified", teamsModified)


	return (
		<>
			<FuseAnimate animation="transition.slideUpIn" delay={300}>

				<TeamsTable
					columns={columns}
					data={teamsModified}
					// onRowClick={(ev, row) => {
					// 	if (row) {
					// 		handleOpenDialog(row.id)
					// 	}
					// }}
				/>

			</FuseAnimate>


			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
			>
				<TeamCard  currentTeam={currentTeam} /> 


			</Dialog>


		</>
		
	);
}

export default withRouter(TeamsList);
