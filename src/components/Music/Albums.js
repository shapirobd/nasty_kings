import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles/AlbumsStyles";
import Album from "./Album";
import { getAlbumImages } from "../../helpers";

const Albums = ({ albumList, setAlbumList, albumArtLoaded, setAlbumArtLoaded, fromHome }) => {
	const classes = useStyles();
	const colWidth = albumList.length === 3 ? 4 : 6;

	useEffect(async () => {
		if (!albumArtLoaded) {
			// getAlbumImages(albumList, setAlbumList, setAlbumArtLoaded);
		}
	}, [albumArtLoaded]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h2"
				className={classes.albumsHeader}
				// sx={{ fontWeight: "bold" }}
			>
				Latest Albums
			</Typography>
			<Grid container spacing={5} className={classes.albumsContainer}>
				{albumList.map((s) => (
					<Album
						key={s.name}
						coverArt={s.coverArt}
						name={s.name}
						url={s.url}
						fromHome={fromHome}
						code={s.code}
						colWidth={colWidth}
					/>
				))}
			</Grid>
		</div>
	);
};

export default Albums;
