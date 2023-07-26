import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles/AlbumsStyles";
import AlbumMobile from "./AlbumMobile";
import { getAlbumImages } from "../../helpers";
import { waitForElm } from "../../helpers";
import { CirclesWithBar } from "react-loader-spinner";

const AlbumsMobile = ({ albumList, setAlbumList, albumArtLoaded, setAlbumArtLoaded, fromHome }) => {
	const [hideSpinner, setHideSpinner] = useState(false);
	waitForElm(".SpotifyPlayer").then(() => {
		console.log("LOADED!");
		setHideSpinner(true);
	});
	
	const classes = useStyles();

	useEffect(async () => {
		if (!albumArtLoaded) {
			// getAlbumImages(albumList, setAlbumList, setAlbumArtLoaded);
		}
	}, [albumArtLoaded]);

	return (
		<div>
			<Typography variant="h4" className={classes.albumsHeader}>
				Latest Albums
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
				{albumList.map((s) => (
					<AlbumMobile
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

export default AlbumsMobile;
