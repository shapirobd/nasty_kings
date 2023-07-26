import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles/SinglesStyles";
import SingleMobile from "./SingleMobile";
import { getSingleImages } from '../../helpers'
import { waitForElm } from "../../helpers";
import { CirclesWithBar } from "react-loader-spinner";

const SinglesMobile = ({ singleList, setSingleList, singleArtLoaded, setSingleArtLoaded, fromHome }) => {
	const [hideSpinner, setHideSpinner] = useState(false);
	waitForElm(".SpotifyPlayer").then(() => {
		console.log("LOADED!");
		setHideSpinner(true);
	});
	
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
				{!hideSpinner && (
					<div className={classes.loadingWheelContainer}>
						<CirclesWithBar
							height="100"
							width="100"
							color="#ffffff"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
							outerCircleColor=""
							innerCircleColor=""
							barColor=""
							ariaLabel="circles-with-bar-loading"
						/>
					</div>
				)}
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
