import React from "react";
import { useStyles } from "./styles/MusicPageStyles";
import logo_bw from "../../images/logo_bw.png";
import SinglesMobile from "./SinglesMobile";

const MusicPageMobile = ({ fromHome = false }) => {
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
			albumCode: "4hVuMLc8qmcagx3qOjIAFb",
		},
		{
			name: "Little Onion Boy",
			coverArt: logo_bw,
			url: "https://open.spotify.com/album/6SltSM8fHWM7IWOheDBC4M?highlight=spotify:track:3NMxc92cnDxLEBVrQQjmni",
			albumCode: "6SltSM8fHWM7IWOheDBC4M",
		},
	];

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<SinglesMobile singleList={singleList} />
			</div>
		</div>
	);
};

export default MusicPageMobile;
