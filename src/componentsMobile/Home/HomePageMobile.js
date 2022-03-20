import React from "react";
import { useStyles } from "./styles/HomePageStyles";
import MusicPageMobile from "../Music/MusicPageMobile";
import ShowsPageMobile from "../Shows/ShowsPageMobile";

const HomePageMobile = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<div className={classes.homeSection}>
				<MusicPageMobile fromHome={true} />
			</div>
			<div className={classes.homeSection}>
				<ShowsPageMobile fromHome={true} />
			</div>
		</div>
	);
};

export default HomePageMobile;
