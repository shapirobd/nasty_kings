import React from "react";
import { useStyles } from "./styles/SingleStyles";
import SpotifyPlayer from "react-spotify-player";
import { Typography } from "@material-ui/core";

const SingleMobile = ({ coverArt, name, url, fromHome, code }) => {
	const classes = useStyles();

	const size = {
		width: "100%",
		height: 200,
	};
	const view = "list"; // 'list' or 'coverart'
	const theme = "black"; // 'black' or 'white'

	return (
		<div>
			<a href={url}>
				<img src={coverArt} alt={coverArt} className={classes.albumCover} />
			</a>
			<Typography variant="h5" className={classes.singleName}>
				{name}
			</Typography>
			{!fromHome && (
				<SpotifyPlayer
					uri={"spotify:track:" + code}
					size={size}
					view={view}
					theme={theme}
				/>
			)}
		</div>
	);
};

export default SingleMobile;
