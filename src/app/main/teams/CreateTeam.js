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
import { createNewTeam } from './store/teamsSlice';


function CreateTeam() {

	// eslint-disable-next-line
	const { t } = useTranslation('mailApp');

	const [name, setName] = useState("")
	const [city, setCity] = useState("")
	const [photoURL, setPhotoURL] = useState("")
	const [country, setCountry] = useState("")

	const dispatch = useDispatch(); 

	

	const me = useSelector(({ auth }) => auth.user);

	console.log("me", me)

	// useEffect(() => {


	// }, [data])

	


	function handleSave() {
		
		console.log("Saved! :)")
		
		let team = {
			
			name: name, 
			logo: photoURL,
			city: city,
			country: country,
			foundation_date: new Date(),
			founder_id: me._id,
			founder_name: me.f_name + " " + me.l_name

		}

		//console.log("team to be sent : ", team)

		dispatch(createNewTeam(team));
	}

	return (
		<div>

			
				<AppBar position="static">
					<Toolbar className="flex w-full">
						<Typography variant="subtitle1" color="inherit">
							Found a new team
						</Typography>
					</Toolbar>
				</AppBar>

				<div className="flex flex-col">

					<DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>

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

export default CreateTeam;