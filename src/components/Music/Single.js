import React from "react";
import { useStyles } from "./styles/SingleStyles";
import { Typography, Grid } from "@material-ui/core";
import SpotifyPlayer from "react-spotify-player";

const Single = ({ coverArt, name, url, fromHome, albumCode }) => {
	const classes = useStyles();

	const size = {
		width: "100%",
		height: 300,
	};
	const view = "list"; // 'list' or 'coverart'
	const theme = "black"; // 'black' or 'white'

	return (
		<Grid item xs={4}>
			<a href={url} style={{ width: "100%" }}>
				<img src={coverArt} alt={coverArt} className={classes.albumCover} />
			</a>
			<Typography variant="h4" className={classes.singleName}>
				{name}
			</Typography>
			{!fromHome && (
				<SpotifyPlayer
					uri={"spotify:album:" + albumCode}
					size={size}
					view={view}
					theme={theme}
				/>
			)}
		</Grid>
	);
};

export default Single;
