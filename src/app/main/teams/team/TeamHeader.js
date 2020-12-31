import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import LocationOn from '@material-ui/icons/LocationOn';




function TeamHeader(props) {


	//console.log("TeamHeader")
	//console.log("props in TeamHeader : ", props)

	const team = props.data

	return (

		// <div className="flex flex-1 items-center justify-between p-4 sm:p-24">
		<div className="flex flex-1 items-center p-4 sm:p-24">



			
			{/* <div className="flex flex-shrink items-center sm:w-224"> */}
			<div style={{ marginBottom:"auto"}}>

					<FuseAnimate animation="transition.slideRightIn" delay={300}>

						<Typography
							className="normal-case flex items-center sm:mb-12"
							component={Link}
							role="button"
							to="/teams"
							color="inherit"
						>
							<Icon className="text-20">
								arrow_back
							</Icon>
							<span className="mx-4">Return</span>
							
						</Typography>

					</FuseAnimate>


			</div>




			<div className="inline-block" style={{paddingLeft:"100px"}}>

				{team? <img style={{height:100}} alt={team.logo} src={team.logo} /> :""}


			</div>

			<div className="p-24 inline-block">

				<h1 style={{marginBottom:5}}>{team? team.name : ""}</h1> 

				<div style={{marginBottom:5}}>

					<div className="inline-block">
						<LocationOn style={{  fontSize:"20", color: "#55e7b5" }} > You</LocationOn>
					</div>

					<div className="inline-block">
						<p>{team? team.city : ""}, {team? team.country : ""}</p>
					</div>

				</div>

				<div  className="inline-block">
					<span>Total members : </span> <span style={{color:"#55e7b5"}}>{team? team.members_confirmed.length : ""}</span>
				</div>
				

			</div>

			



		</div>
	);
}

export default TeamHeader;
