import React, {useState, useEffect} from "react";
import { useStyles } from "./styles/MusicPageStyles";
// import logo_bw from "../../images/logo_bw.png";
import SinglesMobile from "./SinglesMobile";
import AlbumsMobile from "./AlbumsMobile";
import axios from "axios";

const MusicPageMobile = ({ fromHome = false }) => {
	const classes = useStyles();

	const [singleList, setSingleList] = useState([]);
	const [albumList, setAlbumList] = useState([]);
	const [singleArtLoaded, setSingleArtLoaded] = useState(false);
	const [albumArtLoaded, setAlbumArtLoaded] = useState(false);
	useEffect(async () => {
		const getSingles = async () => {
			const resp = await axios.get(
				"https://ghnk-crm-server.herokuapp.com/singles"
			);
			const singles = [];
			for (let single of resp.data) {
				singles.push({
					name: single.name,
					url: single.url,
					coverArt: "",
					code: single.code,
				});
			}
			return singles;
		};
		const getAlbums = async () => {
			const resp = await axios.get("https://ghnk-crm-server.herokuapp.com/albums");
			const albums = [];
			for (let album of resp.data) {
				albums.push({
					name: album.name,
					url: album.url,
					coverArt: "",
					code: album.code,
				});
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

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<SinglesMobile
					singleList={singleList}
					setSingleList={setSingleList}
					singleArtLoaded={singleArtLoaded}
					setSingleArtLoaded={setSingleArtLoaded}
				/>
				<AlbumsMobile
					albumList={albumList}
					setAlbumList={setAlbumList}
					albumArtLoaded={albumArtLoaded}
					setAlbumArtLoaded={setAlbumArtLoaded}
				/>
			</div>
		</div>
	);
};

export default MusicPageMobile;
