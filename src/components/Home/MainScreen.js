import React from "react";
import { useStyles } from "./styles/MainScreenStyles";
import NavBar from "./NavBar";
import Router from "./Router";

const MainScreen = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<NavBar />
			<Router />
		</div>
	);
};

export default MainScreen;
