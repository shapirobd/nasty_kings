import React from "react";
import { useStyles } from "./styles/MusicPageStyles";
import SpotifyPlayer from "react-spotify-player";
import logo_bw from "../../images/logo_bw.png";
import Singles from "./Singles";

const MusicPage = () => {
	const classes = useStyles();

	const size = {
		width: "100%",
		height: 300,
	};
	const view = "list"; // 'list' or 'coverart'
	const theme = "black"; // 'black' or 'white'

	const singleList = [
		{
			name: "Empty Man",
			coverArt: logo_bw,
			url: "https://open.spotify.com/album/4hVuMLc8qmcagx3qOjIAFb?highlight=spotify:track:5ZKrkEKFO2RSLQ0m8jVkpZ",
		},
	];

	return (
		<div className={classes.main}>
			<div className={classes.innerDiv}>
				<Singles singleList={singleList} />
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

export default MusicPage;
