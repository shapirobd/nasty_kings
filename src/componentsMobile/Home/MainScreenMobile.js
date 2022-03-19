import React from "react";
import { useStyles } from "./styles/MainScreenStyles";
import NavBarMobile from "./NavBar";
import Router from "./Router";

const MainScreenMobile = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<NavBarMobile />
			<Router />
		</div>
	);
};

export default MainScreenMobile;
