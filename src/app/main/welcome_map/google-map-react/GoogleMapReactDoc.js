
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import SimpleExample from './examples/simple.js';

/* eslint import/no-webpack-loader-syntax: off */

function GoogleMapReactDoc() {
	return (
		<>
			<div className="flex flex-1 items-center justify-between mb-24">
				<Typography variant="h4" className="">
					GoogleMapReact
				</Typography>
				<Button
					className="normal-case"
					variant="outlined"
					component="a"
					href="https://github.com/google-map-react/google-map-react"
					target="_blank"
					role="button"
				>
					<Icon>link</Icon>
					<span className="mx-4">Reference</span>
				</Button>
			</div>
			<Typography className="mb-16" component="p">
				<code>google-map-react</code> is a component written over a small set of the Google Maps API.
			</Typography>

			<hr />

			<SimpleExample/>

		</>
	);
}

export default GoogleMapReactDoc;
