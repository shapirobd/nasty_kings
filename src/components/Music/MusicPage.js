import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/MusicPageStyles";
import logo_bw from "../../images/logo_bw.png";
import Singles from "./Singles";
import Albums from "./Albums";
import axios from 'axios'

const MusicPage = ({ fromHome = false }) => {
	const classes = useStyles();

	const [singleList, setSingleList] = useState([]);
	const [albumList, setAlbumList] = useState([]);
	const [singleArtLoaded, setSingleArtLoaded] = useState(false);
	const [albumArtLoaded, setAlbumArtLoaded] = useState(false);
	useEffect(async () => {
		const getSingles = async () => {
			const resp = await axios.get("https://ghnk-crm-server.herokuapp.com/singles");
			console.log(resp.data)
			const singles = [];
			for (let single of resp.data) {
				singles.push({
					name: single.name,
					url: single.url,
					coverArt: logo_bw,
					code: single.code,
				});
				console.log(singles)
			}
			return singles;
		}
		const getAlbums = async () => {
			const resp = await axios.get("https://ghnk-crm-server.herokuapp.com/albums");
			console.log(resp.data)
			const albums = [];
			for (let album of resp.data) {
				albums.push({
					name: album.name,
					url: album.url,
					coverArt: logo_bw,
					code: album.code,
				});
				console.log(albums);
			}
			return albums;
		}
		const singles = await getSingles();
		const albums = await getAlbums();
		setSingleList(singles);
		setAlbumList(albums);
		setSingleArtLoaded(false)
		setAlbumArtLoaded(false)
	}, [])

	// const singleList = [
	// 	{
	// 		name: "Empty Man",
	// 		coverArt: logo_bw,
	// 		url: "https://open.spotify.com/track/5ZKrkEKFO2RSLQ0m8jVkpZ?si=a6bfba3e14074742&nd=1",
	// 		albumCode: "5ZKrkEKFO2RSLQ0m8jVkpZ",
	// 	},
	// 	{
	// 		name: "Little Onion Boy",
	// 		coverArt: logo_bw,
	// 		url: "https://open.spotify.com/track/3NMxc92cnDxLEBVrQQjmni?si=11964bbd08c141e4",
	// 		albumCode: "3NMxc92cnDxLEBVrQQjmni",
	// 	},
	// 	{
	// 		name: "TEST",
	// 		coverArt: logo_bw,
	// 		url: "https://open.spotify.com/track/5ZKrkEKFO2RSLQ0m8jVkpZ?si=a6bfba3e14074742&nd=1",
	// 		albumCode: "5ZKrkEKFO2RSLQ0m8jVkpZ",
	// 	},
	// ];

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<Albums
					albumList={albumList}
					setAlbumList={setAlbumList}
					albumArtLoaded={albumArtLoaded}
					setAlbumArtLoaded={setAlbumArtLoaded}
				/>
				<Singles
					singleList={singleList}
					setSingleList={setSingleList}
					singleArtLoaded={singleArtLoaded}
					setSingleArtLoaded={setSingleArtLoaded}
				/>
			</div>
		</div>
	);
};

export default MusicPage;
