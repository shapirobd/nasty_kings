import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/MusicPageStyles";
import logo_bw from "../../images/logo_bw.png";
import Singles from "./Singles";
import axios from 'axios'

const MusicPage = ({ fromHome = false }) => {
	const classes = useStyles();

	const [singleList, setSingleList] = useState([]);
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
		const singles = await getSingles();
		setSingleList(singles);
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
				<Singles singleList={singleList} />
			</div>
		</div>
	);
};

export default MusicPage;
