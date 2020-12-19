import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../myprofile/ProfileCard';




function PlayerDialog(props) {

	const dispatch = useDispatch();

	let currentUser = ""

	const [openDialog, setOpenDialog] = useState(false);

	function handleOpenDialog() {
		setOpenDialog(true);
	}

	function handleCloseDialog() {
		setOpenDialog(false);
	}

	return (

		<Dialog
			open={openDialog}
			onClose={handleCloseDialog}
			aria-labelledby="form-dialog-title"
			classes={{
				paper: 'rounded-8'
			}}
			
		>

			<ProfileCard currentUser={currentUser} />
			
		</Dialog>
	);
}

export default PlayerDialog;
