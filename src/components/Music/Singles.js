import React from "react";
import { Typography } from "@material-ui/core";
import logo_bw from "../../images/logo_bw.png";
import { useStyles } from "./styles/SinglesStyles";
import Single from "./Single";

const Singles = ({ singleList }) => {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h3" className={classes.singlesHeader}>
				Our Latest Singles
			</Typography>
			<div className={classes.albumsContainer}>
				{singleList.map((s) => (
					<Single
						key={s.name}
						coverArt={s.coverArt}
						name={s.name}
						url={s.url}
					/>
				))}
			</div>
		</div>
	);
};

export default Singles;
