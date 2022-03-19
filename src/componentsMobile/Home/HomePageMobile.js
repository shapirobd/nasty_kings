import React from "react";
import { useStyles } from "./styles/HomePageStyles";
import LandingScreenMobile from "./LandingScreenMobile";

const HomePageMobile = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<h1>This is the Home page</h1>
		</div>
	);
};

export default HomePageMobile;
