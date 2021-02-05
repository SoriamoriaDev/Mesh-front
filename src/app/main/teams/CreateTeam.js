import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createNewTeam, clearNewTeam } from './store/teamsSlice';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';



function CreateTeam(props) {

	// eslint-disable-next-line
	const { t } = useTranslation('mailApp');
	const dispatch = useDispatch(); 

	const [name, setName] = useState("")
	const [city, setCity] = useState("")
	const [photoURL, setPhotoURL] = useState("")
	const [country, setCountry] = useState("")
	const [teamID, setTeamID] = useState("")

	const me = useSelector(({ auth }) => auth.user);
	const newTeam = useSelector(({ teams }) => teams.teams.newTeam);

	

	//console.log("props in CreateTeam : ", props)
	//console.log("me", me)
	//console.log("newTeam", newTeam)
	


	function handleSave() {

		console.log("Saved! :)")
		
		let team = {
			
			name: name, 
			logo: photoURL,
			city: city,
			country: country,
			foundation_date: new Date(),
			founder_id: me._id,
			founder_name: me.f_name + " " + me.l_name,
			members_confirmed: me._id,
			"titles.founder" : me._id

		}

		dispatch(createNewTeam(team));
		//setTimeout( () => props.history.push(`/teams/team/${newTeam._id}`) , 3000)
		//props.history.push(`/teams/team/${newTeam._id}`)


	}

	useEffect(() => {
		
		if(newTeam !== undefined){

			swal("Bim !", "A new team was founded :)", {button: false, icon: "success",} );

			setTimeout( () => {

				props.history.push(`/teams/team/${newTeam._id}`)
				dispatch(clearNewTeam());
				

			} , 2000)
			

		}
		
	}, [newTeam])

	// useEffect(() => {
		
		

	// 	props.history.push(`/teams/team/${teamID}`)
			

		
	// }, [dispatch])
	
	// useEffect(() => {

	// 	return 
		
	// })


	return (
		<div>

			
				<AppBar position="static">
					<Toolbar className="flex w-full">
						<Typography variant="subtitle1" color="inherit">
							Start a new team
						</Typography>
					</Toolbar>
				</AppBar>

				<div className="flex flex-col">

					<DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>

                        <TextField
							className="mt-8 mb-16"
							label="Team logo"
							id="subject"
							name="subject"
							value={photoURL}
							onChange={e => setPhotoURL(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>
                        
                        <TextField
							className="mt-8 mb-16"
							label="Name"
							// autoFocus
							value={name}
							onChange={e => setName(e.target.value)}
							variant="outlined"
							fullWidth
							required
						/>

						

						<TextField
							className="mt-8 mb-16"
							label="City"
							id="bcc"
							name="bcc"
							value={city}
							onChange={e => setCity(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Country"
							id="bcc"
							name="bcc"
							value={country}
							onChange={e => setCountry(e.target.value)}
							variant="outlined"
							fullWidth
						/>

						<br/>

						{/* <FormControl variant="outlined" >

							<InputLabel htmlFor="outlined-gender-native-simple">Open or Closed team</InputLabel>
							<Select //PROBLEM
								native
								labelId="outlined-gender-native-simple" 
								id="select"
								value={gender}
								onChange={e => setGender(e.target.value)}
								inputProps={{
									name: 'gender'
								}}
								>
								<option aria-label="None" value=""/>
								<option value={"Open"}>Open</option>
								<option value={"Closed"}>Closed</option>
							</Select>

						</FormControl> */}

					

					

						<br/>
						<br/>

						

						


					</DialogContent>

					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button variant="contained" color="primary" onClick={handleSave}>
								Save
							</Button>
						</div>
					</DialogActions>

				</div>
			
		</div>
	);
}

export default withRouter(CreateTeam);
