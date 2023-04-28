import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles/SinglesStyles";
import SingleMobile from "./SingleMobile";
import { getSingleImages } from '../../helpers'

const SinglesMobile = ({ singleList, setSingleList, singleArtLoaded, setSingleArtLoaded, fromHome }) => {
	const classes = useStyles();

	useEffect(async () => {
		if (!singleArtLoaded) {
			// getSingleImages(singleList, setSingleList, setSingleArtLoaded);
		}
	}, [singleArtLoaded]);

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
						code={s.code}
					/>
				))}
			</div>
		</div>
	);
};

export default SinglesMobile;
