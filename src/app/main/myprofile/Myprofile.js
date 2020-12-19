import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
// NEW STUFF
//import { selectProfile, getProfile } from './store/myprofileSlice';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import reducer from './store';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { getProfile, selectProfile } from './store/myprofileSlice';
import _ from '@lodash';
import ProfileCard from './ProfileCard';

//import _ from '@lodash';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	root: {
		maxWidth: 400,
		minWidth: 400,
		margin: 30
	  },
}));

function MyprofilePage(props) {

	// eslint-disable-next-line 
	const { t } = useTranslation('MyprofilePage');
	const dispatch = useDispatch(); 
	const classes = useStyles(props);

	const me = useSelector(({ auth }) => auth.user);
	const userid = me._id
	const currentUser =  useSelector(selectProfile);
	
	//console.log("currentUser : ", currentUser)
	
	useEffect(() => {

		dispatch(getProfile(userid));

	}, [dispatch, userid]);

	
	// Prevent error when currentUser data is not loaded yet
	if (_.isEmpty(currentUser)) {   
		return null;
	}	

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
			
			content={
				<div className="row">

					<div className="p-12">
					
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>

							<ProfileCard currentUser={currentUser} />

						</FuseAnimateGroup>
					
					</div>
				</div>
			}
		/>


	);
}

export default withReducer('myprofile', reducer)(MyprofilePage);