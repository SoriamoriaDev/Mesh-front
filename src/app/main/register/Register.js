import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import JWTRegisterTab from './tabs/JWTRegisterTab';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Register() {
	const classes = useStyles();

	// const [selectedTab, setSelectedTab] = useState(0);

	// function handleTabChange(event, value) {
	// 	setSelectedTab(value);
	// }

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<FuseAnimate animation="transition.expandIn">
				<div className="flex w-full max-w-400 md:max-w-3xl rounded-12 shadow-2xl overflow-hidden">
					<Card
						className={clsx(
							classes.leftSection,
							'flex flex-col w-full max-w-sm items-center justify-center'
						)}
						square
						elevation={0}
					>
						<CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
							<FuseAnimate delay={300}>
							<div className="flex items-center mb-32">
									<div>
										<Typography className="text-24 font-800 logo-text" color="inherit">
											Please register
										</Typography>
									</div>
								</div>
							</FuseAnimate>

							{/* <Tabs
								value={selectedTab}
								onChange={handleTabChange}
								variant="fullWidth"
								className="w-full mb-32"
							>
								<Tab
									icon={
										<img
											className="h-40 p-4 bg-black rounded-12"
											src="assets/images/logos/jwt.svg"
											alt="firebase"
										/>
									}
									className="min-w-0"
									label="JWT"
								/>
								<Tab
									icon={
										<img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase" />
									}
									className="min-w-0"
									label="Firebase"
								/>
								<Tab
									icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0" />}
									className="min-w-0"
									label="Auth0"
								/>
							</Tabs> */}

							{/* {selectedTab === 0 && <JWTRegisterTab />}
							{selectedTab === 1 && <FirebaseRegisterTab />}
							{selectedTab === 2 && <Auth0RegisterTab />} */}

							<JWTRegisterTab />

						</CardContent>

						<div className="flex flex-col items-center justify-center pb-32">
							<div>
								<span className="font-medium mr-8">Already have an account?</span>
								<Link className="font-medium" to="/login">
									Login
								</Link>
							</div>
							<Link className="font-medium mt-8" to="/">
								Back to Dashboard
							</Link>
						</div>
					</Card>


					<div
						className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}
					>
						<div className="max-w-310">

								<div className="flex items-center mb-32">

									<img 
										style={{ maxWidth: '100px',width: '100%', display: "inline-block"}} 
										src="assets/images/logos/Mesh_logo.png" 
										alt="logo" />


									<div className="border-l-1 mr-4 w-1 h-40" style={{ color: 'white'}}/>

									<div>
										<Typography className="text-24 font-800 logo-text" color="inherit">
											MESH
										</Typography>

										<Typography className="text-24 font-800 logo-text" color="inherit">
											FOOTBALL
										</Typography>
									</div>
									
								</div>


							<FuseAnimate delay={500}>
								
								<Typography variant="subtitle1" color="inherit" className="mt-32">
									This is where your football<br></br>team come to life.
								</Typography>

							
							</FuseAnimate>

						</div>
					</div>


				</div>
			</FuseAnimate>
		</div>
	);
}

export default Register;
