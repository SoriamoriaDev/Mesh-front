import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import dayjs from 'dayjs'
import { updateMyProfile } from './store/myprofileSlice';
import { useDispatch } from 'react-redux';

function EditProfile(data) {

	const [f_name, setF_name] = useState("")
	const [l_name, setL_name] = useState("")
	const [gender, setGender] = useState("")
	const [nationality, setNationality] = useState("")
	const [city, setCity] = useState("")
	const [dob, setDob] = useState("")
	const [height, setHeight] = useState("")
	const [weight, setWeight] = useState("")
	const [main_foot, setMain_foot] = useState("")
	const [photoURL, setPhotoURL] = useState("")
	const [country, setCountry] = useState("")

	const [openDialog, setOpenDialog] = useState(false);
	const dispatch = useDispatch(); 

	//console.log("data.currentUser", data.currentUser)

	useEffect(() => {

		setF_name(data.currentUser.f_name);
		setL_name(data.currentUser.l_name);
		setGender(data.currentUser.gender);
		setNationality(data.currentUser.nationality);
		setCity(data.currentUser.current_town);
		setDob(dayjs(data.currentUser.dob).format("YYYY-MM-DD"));
		setHeight(data.currentUser.height);
		setWeight(data.currentUser.weight);
		setMain_foot(data.currentUser.main_foot);
		setPhotoURL(data.currentUser.data.photoURL);
		setCountry(data.currentUser.country);

	}, [data])

	// eslint-disable-next-line
	const { t } = useTranslation('mailApp');

	function handleOpenDialog() {
		setOpenDialog(true);
	}

	function handleCloseDialog() {
		setOpenDialog(false);
	}

	function handleSave() {
		
		console.log("Saved! :)")
		
		setOpenDialog(false);

		let profile = {
			_id: data.currentUser._id, 
			f_name: f_name, 
			l_name: l_name,
			gender: gender,
			nationality: nationality,
			current_town: city,
			dob: dob,
			height: height,
			weight: weight,
			main_foot: main_foot,
			data: {photoURL: photoURL},
			country: country
		}

		dispatch(updateMyProfile(profile));
	}

	return (
		<div>

			<EditIcon onClick={handleOpenDialog} />

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				aria-labelledby="form-dialog-title"
				classes={{
					paper: 'rounded-8'
				}}
			>
				<AppBar position="static">
					<Toolbar className="flex w-full">
						<Typography variant="subtitle1" color="inherit">
							Edit your profile
						</Typography>
					</Toolbar>
				</AppBar>

				<div className="flex flex-col">

					<DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>
						<TextField
							className="mt-8 mb-16"
							label="First name"
							// autoFocus
							id="from"
							name="from"
							value={f_name}
							onChange={ e => setF_name(e.target.value)}
							variant="outlined"
							fullWidth
							required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Last name"
							id="to"
							name="to"
							value={l_name}
							onChange={e => setL_name(e.target.value)}
							variant="outlined"
							fullWidth
							required
						/>
						<br/>

						<FormControl variant="outlined" >

							<InputLabel htmlFor="outlined-gender-native-simple">Gender</InputLabel>
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
								<option value={"Male"}>Male</option>
								<option value={"Female"}>Female</option>
							</Select>
						</FormControl>

						<br/>
						<br/>

						<TextField
							className="mt-8 mb-16"
							label="Nationality"
							id="cc"
							name="cc"
							value={nationality}
							onChange={e => setNationality(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Date of birth"
							id="dob"
							type="date"
							//format="DD/MM/YYYY"
							value={dob}
							onChange={e => setDob(e.target.value)}
							variant="outlined"
							InputLabelProps={{shrink: true }}
							fullWidth
						/>

						<TextField
							className="mt-8 mb-16"
							label="Height in cm"
							id="subject"
							name="subject"
							type="number"
							value={height}
							onChange={e => setHeight(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Weight in kg"
							id="subject"
							name="subject"
							type="number"
							value={weight}
							onChange={e => setWeight(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<FormControl variant="outlined" >

							<InputLabel htmlFor="outlined-foot-native-simple">Prefered foot</InputLabel>

							<Select //PROBLEM
								native
								labelId="outlined-foot-native-simple" 
								id="select"
								value={main_foot}
								onChange={e => setMain_foot(e.target.value)}
								>
								<option aria-label="None" value=""/>
								<option value={"Right footed"}>Right footed</option>
								<option value={"Left footed"}>Left footed</option>
								<option value={"Ambidextrous"}>Ambidextrous</option> 

							</Select>

						</FormControl>

						<br/>
						<br/>

						<TextField
							className="mt-8 mb-16"
							label="Profile picture"
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


					</DialogContent>

					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button variant="contained" color="primary" onClick={handleSave}>
								Save
							</Button>
						</div>
					</DialogActions>

				</div>
			</Dialog>
		</div>
	);
}

export default EditProfile;
