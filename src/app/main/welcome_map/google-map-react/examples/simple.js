import Tooltip from '@material-ui/core/Tooltip';
import LocationOn from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import GoogleMap from 'google-map-react';
import React from 'react';

function Marker({ text }) {
	return (
		<Tooltip title={text} placement="top">
			<LocationOn className="text-green">place</LocationOn>
		</Tooltip>
	);
}

function SimpleExample() {
	return (
		<div className="w-full">
			<Typography className="h2 mb-16">Simple Map Example</Typography>
			<div className="w-full h-512">
				<GoogleMap
					bootstrapURLKeys={{
						//key: process.env.GOOGLE_MAP_KEY
						key: process.env.REACT_APP_GOOGLE_MAP_KEY,
						map_ids : "3dc9d6a0710ae5c1"
						
					}}
					defaultZoom={16}
					defaultCenter={[43.553524, 7.001037]}
					mapID={"3dc9d6a0710ae5c1"}
					//options={ (maps) => { return { mapTypeId: "roadmap" } }}
					//options={ (maps) => { return { map_ids: "3dc9d6a0710ae5c1" } }}
				>
					<Marker text="Marker Text" lat="43.553524" lng="7.001037" />
				</GoogleMap>
			</div>
		</div>
	);
}

export default SimpleExample;
