import React, {useState, useEffect} from "react";
import { useStyles } from "./styles/MusicPageStyles";
// import logo_bw from "../../images/logo_bw.png";
import SinglesMobile from "./SinglesMobile";
import AlbumsMobile from "./AlbumsMobile";
import axios from "axios";

const MusicPageMobile = ({ fromHome = false }) => {
	const classes = useStyles();

	const [singleList, setSingleList] = useState([]);
	const [newReleaseList, setNewReleaseList] = useState([]);
	const [albumList, setAlbumList] = useState([]);
	const [singleArtLoaded, setSingleArtLoaded] = useState(false);
	const [newReleaseArtLoaded, setNewReleaseArtLoaded] = useState(false);
	const [albumArtLoaded, setAlbumArtLoaded] = useState(false);
	useEffect(async () => {
		const getSongs = async () => {
			const resp = await axios.get(
				"https://ghnk-crm-server.herokuapp.com/songs"
			);
			const songs = [];
			for (let song of resp.data) {
				songs.push({
					name: song.name,
					url: song.url,
					coverArt: "",
					code: song.code,
					category: song.category || "Single",
				});
			}
			return songs;
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
		const songs = await getSongs();
		const albums = await getAlbums();
		setSingleList(songs.filter((s) => s.category === "Single"));
		setNewReleaseList(songs.filter((s) => s.category === "New Release"));
		setAlbumList(albums);
		setSingleArtLoaded(false);
		setNewReleaseArtLoaded(false);
		setAlbumArtLoaded(false);
	}, []);

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<SinglesMobile
					title="New Releases"
					singleList={newReleaseList}
					setSingleList={setNewReleaseList}
					singleArtLoaded={newReleaseArtLoaded}
					setSingleArtLoaded={setNewReleaseArtLoaded}
				/>
				<SinglesMobile
					title="Latest Singles"
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
