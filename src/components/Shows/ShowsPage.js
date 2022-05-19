import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/ShowsPageStyles";
import ShowItem from "./ShowItem";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import axios from 'axios';

const ShowsPage = ({ fromHome = false }) => {
	const classes = useStyles();

	function createData(venue, address, city, state, date, time, venueLink, ticketLink, solo) {
		return { venue, address, city, state, date, time, venueLink, ticketLink, solo };
	}

	// const shows = [
	// 	createData(
	// 		"Nash Street Tavern",
	// 		"250 S. Nash Sreet Hillsborough, NC",
	// 		{ month: "May", day: "26", year: "2022", weekDay: "THURSDAY" },
	// 		"6:00 PM",
	// 		"https://www.facebook.com/NashStreetTavern/",
	// 		"Free",
	// 		true
	// 	),
	// 	createData(
	// 		"Highland Brewing",
	// 		"12 Old Charlotte Highway, Suite 200 Asheville, NC",
	// 		{ month: "June", day: "11", year: "2022", weekDay: "SATURDAY" },
	// 		"6:00 PM",
	// 		"https://highlandbrewing.com/",
	// 		"Free"
	// 	),
	// 	createData(
	// 		"Bullhorn Fest",
	// 		"Shadowbox Studio, 2200-D Dominion St. Durham, NC",
	// 		{ month: "September", day: "24", year: "2022", weekDay: "SATURDAY" },
	// 		"",
	// 		"https://bullhornarts.org/",
	// 		"Free"
	// 	),
	// ];

	const [shows, setShows] = useState([]);
	const days = [
		'SUNDAY', 
		'MONDAY', 
		'TUESDAY', 
		'WEDNESDAY', 
		'THURSDAY', 
		'FRIDAY', 
		'SATURDAY'
	];
	const months = [
		'January', 
		'February', 
		'March', 
		'April', 
		'May', 
		'June', 
		'July', 
		'August', 
		'September', 
		'October', 
		'November', 
		'December'
	];
const pmTimes = [
		'12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
	]

	useEffect(async () => {
		const getShows = async () => {
			const resp = await axios.get(
				// "http://localhost:5000/shows?forSite=true"
				"https://ghnk-crm-server.herokuapp.com/shows?forSite=true"
			);
			console.log(resp.data);
			const showsArr = [];
			for (let show of resp.data) {
				let date = new Date(show.date);
				let weekDay = days[date.getDay() + 1];
				let day = date.getDate();
				let month = months[date.getMonth()];
				let year = date.getFullYear();
				let time = show.time ? show.time.slice(0, show.time.length - 3) : show.time;
				if (time) {
					if (pmTimes.includes(time.slice(0, 2))) {
						time += " PM"
						if (time.slice(0, 2) !== "12") {
							let originalHour = time.slice(0, 2);
							let newHour = parseInt(originalHour) - 12
							time = newHour + time.substring(2)
						}
					} else {
						time += " AM"
						if (time.slice(0, 2) === "00") {
							time = "12" + time.substring(2);
						} else if (time.slice(0, 1) === "0") {
							time = time.substring(1);
						}
					}
				}
				const fullDate = {
					month,
					day,
					year,
					weekDay,
				};
				showsArr.push(
					createData(
						show.venue,
						show.address,
						show.city,
						show.state,
						fullDate,
						time,
						show.venueLink,
						show.ticketLink,
						show.solo
					)
				);
				console.log(showsArr);
			}
			return showsArr;
		};
		const foundShows = await getShows();
		setShows(foundShows);
	}, []);

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				className={classes.innerDiv}
				// xs={12}
				// sm={10}
				// lg={8}
			>
				<Grid
					item
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h2
						// variant="h2"
						// sx={{ color: "white", fontWeight: "bold" }}s
						className={fromHome ? classes.homeShowsHeader : classes.showsHeader}
					>
						Upcoming Shows
					</h2>
					{shows.map((show) => (
						<ShowItem key={`${show.venue}__${show.date}`} show={show} />
					))}
				</Grid>
			</Grid>
		</div>
	);
};

export default ShowsPage;
