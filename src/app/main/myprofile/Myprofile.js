import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
// NEW STUFF
import { selectProfile, getProfile } from './store/myprofileSlice';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import reducer from './store';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import EditProfile from './EditProfile';
import LocationOn from '@material-ui/icons/LocationOn';

//import _ from '@lodash';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	root: {
		maxWidth: 450,
		margin: 30
	  },
}));

function MyprofilePage(props) {
	// eslint-disable-next-line 
	const { t } = useTranslation('MyprofilePage');
	const dispatch = useDispatch(); 
	const classes = useStyles(props);
	const currentUser = useSelector(({ auth }) => auth.user); // SIGNET

	console.log("user in my profile Page", currentUser)
	console.log("props in my profile Page", props)


	useEffect(() => {

		console.log("useEffect in Profile Page")

		//dispatch(getProfile(props.auth.user._id));

	}, [dispatch]);

	// if (_.isEmpty(games)) {   
	// 	return null;
	// }	

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}

			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			
			// content={
			// 	<div className="p-24">
					
			// 	</div>
			// }
			content={
				<div className="row">

					<div className="p-12">
					
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>

							

							<Card className={classes.root}>
								

								<CardHeader 
								
									action={
										<IconButton aria-label="settings">
											<EditProfile />
										</IconButton>
										}

									title="Your profile" 
									center="true"

								/>

								

								<CardContent>
									
									{/* <img src="assets/images/avatars/max.jpg" */}
									<img src={currentUser.data.photoURL}
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
										<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>Cannes, France</p> 

									</div>

									<div style={{textAlign: "center"}}>

										<img
											className="mx-4 min-w-20 inline-block"
											src={`assets/images/flags/fr.png`}
											verticalalign="top"
											
										/>
										&nbsp;&nbsp;
										<p className="inline-block" style={{textAlign: "center", fontSize: 15}}>{currentUser.country}</p> 

									</div>

								</CardContent>
								
									<div style={{backgroundColor: "rgba(250, 250, 250, 0.1)" }}>
										<p  style={{padding: "10px", textAlign: "center", color: "white", fontSize: "medium"}}>
										38 years  &nbsp; |  &nbsp; {currentUser.height} cm &nbsp;  |  &nbsp; {currentUser.weight} kg &nbsp;  |  &nbsp; {currentUser.main_foot}
										</p>
									</div>

								<CardContent>

									<br/>
									<br/>

									<Typography variant="body2" color="textSecondary" component="p">
									TEAMS
									<br/>
									PERFORMANCE
									<br/>
									ATTENDANCE
									</Typography>

								</CardContent>

							</Card>

							<Card className={classes.root}>

								<CardHeader
									avatar={
									<Avatar aria-label="recipe" className={classes.avatar}>
										M
									</Avatar>
									}
									action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
									}
									title="Your profile"
									// subheader="September 14, 2016"
								/>

								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
									This impressive paella is a perfect party dish and a fun meal to cook together with your
									guests. Add 1 cup of frozen peas along with the mussels, if you like.
									</Typography>
								</CardContent>

							</Card>

						
						</FuseAnimateGroup>
					

					  	
					</div>
				</div>
			}
		/>









	);
}

export default withReducer('myprofile', reducer)(MyprofilePage);