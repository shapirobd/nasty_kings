import React from "react";
import { useStyles } from "./styles/AlbumStyles";
import { Typography, Grid } from "@material-ui/core";
import SpotifyPlayer from "react-spotify-player";

const Album = ({ coverArt, name, url, fromHome, code, colWidth }) => {
	const classes = useStyles();

	const size = {
		width: colWidth === 4 ? "100%" : "80%",
		height: 450,
	};
	const view = "list"; // 'list' or 'coverart'
	const theme = "black"; // 'black' or 'white'

	return (
		<Grid item xs={colWidth}>
			{coverArt && <><a href={url} style={{ width: "100%" }}>
				<img
					src={coverArt}
					alt={coverArt}
					className={classes.albumCover}
					style={{ width: colWidth === 4 ? "100%" : "80%" }}
				/>
			</a>
			<Typography variant="h4" className={classes.albumName}>
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
		</Grid>
	);
};

export default Album;
