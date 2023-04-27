import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import logo_bw from "../../images/logo_bw.png";
import { useStyles } from "./styles/AlbumsStyles";
import AlbumMobile from "./AlbumMobile";
import axios from 'axios';

const AlbumsMobile = ({ albumList, setAlbumList, albumArtLoaded, setAlbumArtLoaded, fromHome }) => {
	const classes = useStyles();

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
