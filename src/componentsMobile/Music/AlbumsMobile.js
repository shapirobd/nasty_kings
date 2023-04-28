import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles/AlbumsStyles";
import AlbumMobile from "./AlbumMobile";
import { getAlbumImages } from "../../helpers";

const AlbumsMobile = ({ albumList, setAlbumList, albumArtLoaded, setAlbumArtLoaded, fromHome }) => {
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
