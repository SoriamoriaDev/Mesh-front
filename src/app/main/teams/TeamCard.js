
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
// NEW STUFF
import { useSelector } from 'react-redux';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
//import EditProfile from './EditProfile';
import LocationOn from '@material-ui/icons/LocationOn';
import dayjs from 'dayjs'
import _ from '@lodash';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	root: {
		maxWidth: 400,
		minWidth: 400,
		//margin: 30
	  },
}));

function TeamCard(data) {

	// eslint-disable-next-line 
	const { t } = useTranslation('MyprofilePage');
	const classes = useStyles(data);
	const currentTeam =  data.currentTeam;

	const me = useSelector(({ auth }) => auth.user);
	
	//console.log("currentTeam : ", currentTeam)
	
	// Prevent error when currentTeam data is not loaded yet
	if (_.isEmpty(currentTeam)) {   
		return null;
	}	

	return (
		

		<Card className={classes.root}>
			

			{ me._id === currentTeam._id ? 
			
				<CardHeader 
				
					action={
						<IconButton aria-label="settings">
							{/* <EditProfile currentTeam={currentTeam} /> */}
						</IconButton>
						}

					title="My profile" 
					//center="true"

				/>

			: 

				<CardHeader 
				
					

					title="Team info" 
					//center="true"

				/>
			
			}

			

			<CardContent>
				
				<br/>
				
				{/* <img src={currentTeam.logo ? currentTeam.logo : "/assets/images/teams/OM_logo.png"} 
					alt="avatar" 
					style={{
					width: 150,
					height: 150,
					borderRadius: 150 / 2,
					borderColor: "white",
					borderWidth: 3,
					objectFit: "cover",
					display: "block",
					marginLeft: "auto",
					marginRight: "auto"
					}}
				/> */}

				<img src={currentTeam.logo ? currentTeam.logo : "/assets/images/teams/OM_logo.png"} 
					alt="logo" 
					style={{
					width: 150,
					height: 150,
					// borderRadius: 150 / 2,
					// borderColor: "white",
					// borderWidth: 3,
					// objectFit: "cover",
					display: "block",
					marginLeft: "auto",
					marginRight: "auto"
					}}
				/>

				<br/>

				{currentTeam ? 
				<h2 style={{textAlign: "center", fontSize: 25}}>{currentTeam.name}</h2>
				: "" }

				<div style={{textAlign: "center"}}>

					<LocationOn style={{  fontSize:"20", color: "#55e7b5" }} > You</LocationOn>

					&nbsp;&nbsp;
					<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>{currentTeam.city? currentTeam.city : "City"}, {currentTeam.country ? currentTeam.country : "Country"}</p> 

				</div>

				<div style={{textAlign: "center"}}>

					<img
						className="mx-4 min-w-20 inline-block" //TODO
						src={`assets/images/flags/fr.png`}
						verticalalign="top"
						alt="flag"
						
					/>
					&nbsp;&nbsp;
					<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>{currentTeam.country ? currentTeam.country : "Country"}</p> 

				</div>

			</CardContent>
			
				{/* <div style={{backgroundColor: "rgba(250, 250, 250, 0.1)" }}>
					<p  style={{padding: "10px", textAlign: "center", color: "white", fontSize: "medium"}}>
					{ currentTeam.dob ? dayjs().diff(currentTeam.dob, 'years')+ " years" : "Age" }   &nbsp; |  &nbsp; {currentTeam.height ? currentTeam.height + " cm" : "Height"} &nbsp;  |  &nbsp; {currentTeam.weight ? currentTeam.weight + " kg" : "Weight"} &nbsp;  |  &nbsp; {currentTeam.main_foot ? currentTeam.main_foot : "Preferred foot"}
					</p>
				</div> */}

			<CardContent>

				<br/>

				{/* <div>
					
					<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>TEAMS &nbsp; &nbsp; &nbsp;</p>
					<img className="inline-block" alt="team badge" src="/assets/images/teams/OM_logo.png" height="50" width="50"/> &nbsp; &nbsp; &nbsp;
					<img className="inline-block" alt="team badge" src="/assets/images/teams/Rosario_logo.svg" height="40" width="40"/> &nbsp; &nbsp; &nbsp;
					<img className="inline-block" alt="team badge" src="/assets/images/teams/ASCannes_logo.png" height="40" width="40"/>
				</div>

				<br/>
				<br/>
				<div>
					<p className="inline-block" style={{textAlign: "center", verticalAlign: "40%", fontSize: 15}}>PERFORMANCE &nbsp; &nbsp; &nbsp;</p> 
					<CustomizedRatings  rating={currentTeam.performance}/>
				</div>
				<br/>
				<br/>
				<div>
					<p className="inline-block" style={{textAlign: "center", verticalAlign: "40%", fontSize: 15}}>ATTENDANCE &nbsp; &nbsp; &nbsp; &nbsp; </p> 
					<CustomizedRatings rating={currentTeam.visitGames}/>
				</div> */}

				<br/>
				

			</CardContent>

		</Card>


	);
}

export default TeamCard;