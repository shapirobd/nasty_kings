import React from "react";
import { Typography } from "@material-ui/core";
import logo_bw from "../../images/logo_bw.png";
import { useStyles } from "./styles/SinglesStyles";
import SingleMobile from "./SingleMobile";

const SinglesMobile = ({ singleList, fromHome }) => {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h4" className={classes.singlesHeader}>
				Latest Singles
			</Typography>
			<div className={classes.albumsContainer}>
				{singleList.map((s) => (
					<SingleMobile
						key={s.name}
						coverArt={s.coverArt}
						name={s.name}
						url={s.url}
						fromHome={fromHome}
						albumCode={s.albumCode}
					/>
				))}
			</div>
		</div>
	);
};

export default SinglesMobile;
