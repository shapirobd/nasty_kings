import React from "react";
import { useStyles } from "./styles/AlbumStyles";
import SpotifyPlayer from "react-spotify-player";
import { Typography } from "@material-ui/core";

const AlbumMobile = ({ coverArt, name, url, fromHome, code }) => {
	const classes = useStyles();

	const size = {
		width: "100%",
		height: 450,
	};
	const view = "list"; // 'list' or 'coverart'
	const theme = "black"; // 'black' or 'white'

	return (
		<div>
			{coverArt && <><a href={url}>
				<img src={coverArt} alt={coverArt} className={classes.albumCover} />
			</a>
			<Typography variant="h5" className={classes.albumName}>
				{name}
			</Typography></>}
			{!fromHome && (
				<SpotifyPlayer
					uri={"spotify:album:" + code}
					size={size}
					view={view}
					theme={theme}
				/>
			)}
		</div>
	);
};

export default AlbumMobile;
