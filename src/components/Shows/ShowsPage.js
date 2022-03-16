import React from "react";
import { useStyles } from "./styles/ShowsPageStyles";

const ShowsPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<h1>This is the Shows page</h1>
		</div>
	);
};

export default ShowsPage;
