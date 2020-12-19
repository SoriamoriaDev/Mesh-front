// import FusePageSimple from '@fuse/core/FusePageSimple';
// import { makeStyles } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
// // NEW STUFF
// //import { selectProfile, getProfile } from './store/myprofileSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import withReducer from 'app/store/withReducer';
// import React, { useEffect } from 'react';
// import reducer from './store';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import IconButton from '@material-ui/core/IconButton';
// import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
// import EditProfile from './EditProfile';
// import LocationOn from '@material-ui/icons/LocationOn';
// import CustomizedRatings from './Rating';
// import dayjs from 'dayjs'
// import { getProfile, selectProfile } from './store/myprofileSlice';
// import _ from '@lodash';

// //import _ from '@lodash';

// const useStyles = makeStyles(theme => ({
// 	layoutRoot: {},
// 	root: {
// 		maxWidth: 400,
// 		minWidth: 400,
// 		margin: 30
// 	  },
// }));

// function MyprofilePage(props) {

// 	// eslint-disable-next-line 
// 	const { t } = useTranslation('MyprofilePage');
// 	const dispatch = useDispatch(); 
// 	const classes = useStyles(props);

// 	const me = useSelector(({ auth }) => auth.user);
// 	const userid = me._id
// 	const currentUser =  useSelector(selectProfile);
	
// 	console.log("currentUser : ", currentUser)
	
// 	useEffect(() => {

// 		dispatch(getProfile(userid));

// 	}, [dispatch, userid]);

	
// 	// Prevent error when currentUser data is not loaded yet
// 	if (_.isEmpty(currentUser)) {   
// 		return null;
// 	}	

// 	return (
// 		<FusePageSimple
// 			classes={{
// 				root: classes.layoutRoot
// 			}}

// 			header={
// 				<div className="p-24">
// 					<h4>{t('TITLE')}</h4>
// 				</div>
// 			}
			
// 			content={
// 				<div className="row">

// 					<div className="p-12">
					
// 						<FuseAnimateGroup
// 							className="flex flex-wrap"
// 							enter={{
// 								animation: 'transition.slideUpBigIn'
// 							}}
// 						>

// 							<Card className={classes.root}>
								

// 								<CardHeader 
								
// 									action={
// 										<IconButton aria-label="settings">
// 											<EditProfile currentUser={currentUser} />
// 										</IconButton>
// 										}

// 									title="My profile" 
// 									center="true"

// 								/>

								

// 								<CardContent>
									
// 									<img src={currentUser.data.photoURL ? currentUser.data.photoURL : "/assets/images/avatars/avatar.png"} 
// 										alt="avatar" 
// 										style={{
// 										width: 150,
// 										height: 150,
// 										borderRadius: 150 / 2,
// 										borderColor: "white",
// 										borderWidth: 3,
// 										objectFit: "cover",
// 										display: "block",
// 										marginLeft: "auto",
// 										marginRight: "auto"
// 										}}
// 									/>

// 									<br/>

// 									{currentUser ? 
//         							<h2 style={{textAlign: "center", fontSize: 25}}>{currentUser.f_name} {currentUser.l_name}</h2>
// 									: "" }

// 									<div style={{textAlign: "center"}}>

// 										<LocationOn style={{  fontSize:"20", color: "#55e7b5" }} > You</LocationOn>

// 										&nbsp;&nbsp;
// 										<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>{currentUser.current_town ? currentUser.current_town : "City"}, {currentUser.country ? currentUser.country : "Country"}</p> 

// 									</div>

// 									<div style={{textAlign: "center"}}>

// 										<img
// 											className="mx-4 min-w-20 inline-block" //TODO
// 											src={`assets/images/flags/fr.png`}
// 											verticalalign="top"
// 											alt="flag"
											
// 										/>
// 										&nbsp;&nbsp;
// 										<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>{currentUser.nationality ? currentUser.nationality : "Nationality"}</p> 

// 									</div>

// 								</CardContent>
								
// 									<div style={{backgroundColor: "rgba(250, 250, 250, 0.1)" }}>
// 										<p  style={{padding: "10px", textAlign: "center", color: "white", fontSize: "medium"}}>
// 										{ currentUser.dob ? dayjs().diff(currentUser.dob, 'years')+ " years" : "Age" }   &nbsp; |  &nbsp; {currentUser.height ? currentUser.height + " cm" : "Height"} &nbsp;  |  &nbsp; {currentUser.weight ? currentUser.weight + " kg" : "Weight"} &nbsp;  |  &nbsp; {currentUser.main_foot ? currentUser.main_foot : "Preferred foot"}
// 										</p>
// 									</div>

// 								<CardContent>

// 									<br/>

// 									<div>
// 										{/* TODO */}
// 										<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>TEAMS &nbsp; &nbsp; &nbsp;</p>
// 										<img className="inline-block" alt="team badge" src="/assets/images/teams/OM_logo.png" height="50" width="50"/> &nbsp; &nbsp; &nbsp;
// 										<img className="inline-block" alt="team badge" src="/assets/images/teams/Rosario_logo.svg" height="40" width="40"/> &nbsp; &nbsp; &nbsp;
// 										<img className="inline-block" alt="team badge" src="/assets/images/teams/ASCannes_logo.png" height="40" width="40"/>
// 									</div>

// 									<br/>
// 									<br/>
// 									<div>
// 										<p className="inline-block" style={{textAlign: "center", verticalAlign: "40%", fontSize: 15}}>PERFORMANCE &nbsp; &nbsp; &nbsp;</p> 
// 										<CustomizedRatings  rating={currentUser.performance}/>
// 									</div>
// 									<br/>
// 									<br/>
// 									<div>
// 										<p className="inline-block" style={{textAlign: "center", verticalAlign: "40%", fontSize: 15}}>ATTENDANCE &nbsp; &nbsp; &nbsp; &nbsp; </p> 
// 										<CustomizedRatings rating={currentUser.visitGames}/>
// 									</div>
									

// 								</CardContent>

// 							</Card>

						
// 						</FuseAnimateGroup>
					

					  	
// 					</div>
// 				</div>
// 			}
// 		/>









// 	);
// }

// export default withReducer('myprofile', reducer)(MyprofilePage);