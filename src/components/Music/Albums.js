import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import logo_bw from "../../images/logo_bw.png";
import { useStyles } from "./styles/AlbumsStyles";
import Album from "./Album";
import axios from "axios";

const Albums = ({ albumList, setAlbumList, albumArtLoaded, setAlbumArtLoaded, fromHome }) => {
	const classes = useStyles();
	const colWidth = albumList.length === 3 ? 4 : 6;

	useEffect(async () => {
		const getAlbumImages = async () => {
			const token_resp = await axios.post(
				"https://accounts.spotify.com/api/token",
				"grant_type=client_credentials&client_id=353683482dae4cb5b5a45f8145e0a0ec&client_secret=8539cea0e9c14f689bd79fb83502e79c",
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
				}
			);
			let spotify_access_token = token_resp.data.access_token;
			console.log("spotify_access_token = " + spotify_access_token);
			const albumListCopy = [...albumList];
			for (let album of albumListCopy) {
				const resp = await axios.get(
					"https://api.spotify.com/v1/albums/" +
						album.code.replace("?", "?").replace("&", "&"),
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + spotify_access_token,
						},
					}
				);
				if (resp.data) {
					if (resp.data.images) {
						if (resp.data.images.length) {
							album.coverArt = resp.data.images[0].url;
						}
					}
				}
			}
			setAlbumList(albumListCopy);
			setAlbumArtLoaded(true);
		};
		if (!albumArtLoaded) {
			getAlbumImages();
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
