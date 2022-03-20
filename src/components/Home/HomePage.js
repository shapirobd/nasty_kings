import React from "react";
import { useStyles } from "./styles/HomePageStyles";
import MusicPage from "../Music/MusicPage";
import ShowsPage from "../Shows/ShowsPage";

const HomePage = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<div className={classes.homeSection}>
				<MusicPage fromHome={true} />
			</div>
			<div className={classes.homeSection}>
				<ShowsPage fromHome={true} />
			</div>
		</div>
	);
};

export default HomePage;
