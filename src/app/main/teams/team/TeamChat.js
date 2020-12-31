
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
// NEW STUFF
import { useSelector } from 'react-redux';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import LocationOn from '@material-ui/icons/LocationOn';
//import CustomizedRatings from './Rating';
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

function TeamChat(data) {

	//console.log("TeamChat")

	// eslint-disable-next-line 
	const { t } = useTranslation('MyprofilePage');
	const classes = useStyles(data);
	//const currentUser =  data.currentUser;

	const me = useSelector(({ auth }) => auth.user);
	
	//console.log("currentUser : ", currentUser)
	
	// Prevent error when currentUser data is not loaded yet
	// if (_.isEmpty(currentUser)) {   
	// 	return null;
	// }	

	return (
		

		<Card className={classes.root}>
			

				<CardHeader 
				
					title="Chat" 

				/>

			

			<CardContent>

				Team chat between players
				
			</CardContent>
				
				{/* <br/>
				
				<img src={currentUser.data.photoURL ? currentUser.data.photoURL : "/assets/images/avatars/avatar.png"} 
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
				/>

				<br/>

				{currentUser ? 
				<h2 style={{textAlign: "center", fontSize: 25}}>{currentUser.f_name} {currentUser.l_name}</h2>
				: "" }

				<div style={{textAlign: "center"}}>

					<LocationOn style={{  fontSize:"20", color: "#55e7b5" }} > You</LocationOn>

					&nbsp;&nbsp;
					<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>{currentUser.current_town ? currentUser.current_town : "City"}, {currentUser.country ? currentUser.country : "Country"}</p> 

				</div>

				<div style={{textAlign: "center"}}>

					<img
						className="mx-4 min-w-20 inline-block"
						src={`assets/images/flags/fr.png`}
						verticalalign="top"
						alt="flag"
						
					/>
					&nbsp;&nbsp;
					<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>{currentUser.nationality ? currentUser.nationality : "Nationality"}</p> 

				</div>

			</CardContent>
			
				<div style={{backgroundColor: "rgba(250, 250, 250, 0.1)" }}>
					<p  style={{padding: "10px", textAlign: "center", color: "white", fontSize: "medium"}}>
					{ currentUser.dob ? dayjs().diff(currentUser.dob, 'years')+ " years" : "Age" }   &nbsp; |  &nbsp; {currentUser.height ? currentUser.height + " cm" : "Height"} &nbsp;  |  &nbsp; {currentUser.weight ? currentUser.weight + " kg" : "Weight"} &nbsp;  |  &nbsp; {currentUser.main_foot ? currentUser.main_foot : "Preferred foot"}
					</p>
				</div>

			<CardContent>

				<br/>

				<div>
					
					<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>TEAMS &nbsp; &nbsp; &nbsp;</p>
					<img className="inline-block" alt="team badge" src="/assets/images/teams/OM_logo.png" height="50" width="50"/> &nbsp; &nbsp; &nbsp;
					<img className="inline-block" alt="team badge" src="/assets/images/teams/Rosario_logo.svg" height="40" width="40"/> &nbsp; &nbsp; &nbsp;
					<img className="inline-block" alt="team badge" src="/assets/images/teams/ASCannes_logo.png" height="40" width="40"/>
				</div>

				<br/>
				<br/>
				<div>
					<p className="inline-block" style={{textAlign: "center", verticalAlign: "40%", fontSize: 15}}>PERFORMANCE &nbsp; &nbsp; &nbsp;</p> 
					<CustomizedRatings  rating={currentUser.performance}/>
				</div>
				<br/>
				<br/>
				<div>
					<p className="inline-block" style={{textAlign: "center", verticalAlign: "40%", fontSize: 15}}>ATTENDANCE &nbsp; &nbsp; &nbsp; &nbsp; </p> 
					<CustomizedRatings rating={currentUser.visitGames}/>
				</div>

				<br/>
				

			</CardContent> */}

		</Card>


	);
}

export default TeamChat;