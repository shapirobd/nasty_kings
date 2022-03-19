import React from "react";
import { useStyles } from "./styles/SingleStyles";
import { Typography } from "@material-ui/core";

const SingleMobile = ({ coverArt, name, url }) => {
	const classes = useStyles();

	return (
		<div>
			<a href={url}>
				<img src={coverArt} alt={coverArt} className={classes.albumCover} />
			</a>
			<Typography variant="h5" className={classes.singleName}>
				{name}
			</Typography>
		</div>
	);
};

export default SingleMobile;
