import React from "react";
import { useStyles } from "./styles/MusicPageStyles";
import SpotifyPlayer from "react-spotify-player";

const MusicPageMobile = () => {
	const classes = useStyles();

	const size = {
		width: "100%",
		height: 300,
	};
	const view = "list"; // 'list' or 'coverart'
	const theme = "black"; // 'black' or 'white'

	return (
		<div className={classes.main}>
			<div className={classes.innerDiv}>
				<SpotifyPlayer
					uri="spotify:album:4hVuMLc8qmcagx3qOjIAFb"
					size={size}
					view={view}
					theme={theme}
				/>
			</div>
		</div>
	);
};

export default MusicPageMobile;
