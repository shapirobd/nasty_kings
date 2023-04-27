import React, {useState, useEffect} from "react";
import { useStyles } from "./styles/MusicPageStyles";
import logo_bw from "../../images/logo_bw.png";
import SinglesMobile from "./SinglesMobile";
import AlbumsMobile from "./AlbumsMobile";
import axios from "axios";

const MusicPageMobile = ({ fromHome = false }) => {
	const classes = useStyles();

	const size = {
		width: "100%",
		height: 300,
	};
	const view = "list"; // 'list' or 'coverart'
	const theme = "black"; // 'black' or 'white'

	const [singleList, setSingleList] = useState([]);
	const [albumList, setAlbumList] = useState([]);
	const [singleArtLoaded, setSingleArtLoaded] = useState(false);
	const [albumArtLoaded, setAlbumArtLoaded] = useState(false);
	useEffect(async () => {
		const getSingles = async () => {
			const resp = await axios.get(
				"https://ghnk-crm-server.herokuapp.com/singles"
			);
			console.log(resp.data);
			const singles = [];
			for (let single of resp.data) {
				singles.push({
					name: single.name,
					url: single.url,
					coverArt: logo_bw,
					code: single.code,
				});
				console.log(singles);
			}
			return singles;
		};
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
		setSingleArtLoaded(false);
		setAlbumArtLoaded(false);
	}, []);

	// const singleList = [
	// 	{
	// 		name: "Empty Man",
	// 		coverArt: logo_bw,
	// 		url: "https://open.spotify.com/album/4hVuMLc8qmcagx3qOjIAFb?highlight=spotify:track:5ZKrkEKFO2RSLQ0m8jVkpZ",
	// 		albumCode: "4hVuMLc8qmcagx3qOjIAFb",
	// 	},
	// 	{
	// 		name: "Little Onion Boy",
	// 		coverArt: logo_bw,
	// 		url: "https://open.spotify.com/album/6SltSM8fHWM7IWOheDBC4M?highlight=spotify:track:3NMxc92cnDxLEBVrQQjmni",
	// 		albumCode: "6SltSM8fHWM7IWOheDBC4M",
	// 	},
	// ];

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<AlbumsMobile
					albumList={albumList}
					setAlbumList={setAlbumList}
					albumArtLoaded={albumArtLoaded}
					setAlbumArtLoaded={setAlbumArtLoaded}
				/>
				<SinglesMobile
					singleList={singleList}
					setSingleList={setSingleList}
					singleArtLoaded={singleArtLoaded}
					setSingleArtLoaded={setSingleArtLoaded}
				/>
			</div>
		</div>
	);
};

export default MusicPageMobile;
